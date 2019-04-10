/**
 * Created by 阿卡琳 on 16/06/2017.
 */
"use strict";
import { action, observable } from "mobx";
import { preferences as pref } from "./store/preferences";

class Router {
    @observable path = "";

    constructor() {
        if (typeof window !== "undefined") {
            this.path = location.hash;
            addEventListener("hashchange", action(() => (this.path = location.hash)));
        }
    }

    static get editor() {
        return {
            name: pref.i18n["app"]["edit"],
            path: "#/",
            title: pref.i18n["app"]["editor-tip"]
        };
    }
    static get synchronizer() {
        return {
            name: pref.i18n["app"]["synchronize"],
            path: "#/synchronizer/",
            title: pref.i18n["app"]["synchronizer-tip"]
        };
    }
    static get preferences() {
        return {
            name: pref.i18n["app"]["preferences"],
            path: "#/preferences/",
            title: pref.i18n["app"]["preferences-tip"]
        };
    }
}

const router = new Router();
export { router, Router };
