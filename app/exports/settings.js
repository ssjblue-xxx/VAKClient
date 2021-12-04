// @ts-nocheck
"use strict";
let UtilManager = require("../modules/util-manager");

module.exports = {
	acceleratedCanvas: {
		name: "there are no settings here, now show me your boobs",
		id: "acceleratedCanvas",
		cat: "Performance",
		type: "checkbox",
		val: false,
		needsRestart: false,
		html(){
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		},
		info: "please"
	}
};
