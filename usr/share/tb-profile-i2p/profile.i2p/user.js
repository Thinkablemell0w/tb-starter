# Overrides for Extension Preferences
# Tor Browser Bundle
# Do not edit this file.
#
# This file is modified from a file included in the Tor Browser Bundle.
#
# Copyright 2017 The Tor Project.  See LICENSE.tor for licensing information.

# HTTPS Everywhere Preferences:
user_pref("extensions.https_everywhere._observatory.popup_shown", true);
user_pref("extensions.https_everywhere.toolbar_hint_shown", true);

# NoScript Preferences:
user_pref("capability.policy.maonoscript.javascript.enabled", "allAccess");
user_pref("capability.policy.maonoscript.sites", "[System+Principal] about: about:tbupdate about:tor chrome: resource: blob: mediasource: moz-extension: moz-safe-about: about:neterror about:certerror about:feeds about:tabcrashed about:cache");
user_pref("noscript.default", "[System+Principal] about: about:tbupdate about:tor chrome: resource: blob: mediasource: moz-extension: moz-safe-about: about:neterror about:certerror about:feeds about:tabcrashed about:cache");
user_pref("noscript.mandatory", "[System+Principal] about: about:tbupdate about:tor chrome: resource: blob: mediasource: moz-extension: moz-safe-about: about:neterror about:certerror about:feeds about:tabcrashed about:cache");
user_pref("noscript.ABE.enabled", false);
user_pref("noscript.ABE.notify", false);
user_pref("noscript.ABE.wanIpAsLocal", false);
user_pref("noscript.confirmUnblock", false);
user_pref("noscript.contentBlocker", true);
user_pref("noscript.firstRunRedirection", false);
user_pref("noscript.global", true);
user_pref("noscript.gtemp", "");
user_pref("noscript.opacizeObject", 3);
user_pref("noscript.forbidWebGL", true);
user_pref("noscript.forbidFonts", false);
user_pref("noscript.options.tabSelectedIndexes", "5,0,0");
user_pref("noscript.policynames", "");
user_pref("noscript.secureCookies", true);
user_pref("noscript.showAllowPage", false);
user_pref("noscript.showBaseDomain", false);
user_pref("noscript.showDistrust", false);
user_pref("noscript.showRecentlyBlocked", false);
user_pref("noscript.showTemp", false);
user_pref("noscript.showTempToPerm", false);
user_pref("noscript.showUntrusted", false);
user_pref("noscript.STS.enabled", false);
user_pref("noscript.subscription.lastCheck", -142148139);
user_pref("noscript.temp", "");
user_pref("noscript.untrusted", "");
user_pref("noscript.forbidMedia", false);
user_pref("noscript.allowWhitelistUpdates", false);
user_pref("noscript.fixLinks", false);
// Now handled by plugins.click_to_play
user_pref("noscript.forbidFlash", false);
user_pref("noscript.forbidSilverlight", false);
user_pref("noscript.forbidJava", false);
user_pref("noscript.forbidPlugins", false);
// Usability tweaks
user_pref("noscript.showPermanent", false);
user_pref("noscript.showTempAllowPage", true);
user_pref("noscript.showRevokeTemp", true);
user_pref("noscript.notify", false);
user_pref("noscript.autoReload", true);
user_pref("noscript.autoReload.allTabs", false);
user_pref("noscript.cascadePermissions", true);
user_pref("noscript.restrictSubdocScripting", true);
user_pref("noscript.showVolatilePrivatePermissionsToggle", false);
user_pref("noscript.volatilePrivatePermissions", true);
user_pref("noscript.clearClick", 0);

user_pref("intl.locale.matchOS", false);

user_pref("extensions.https_everywhere._observatory.enabled", false);
user_pref("extensions.https_everywhere.options.autoUpdateRulesets", false);
user_pref("extensions.https_everywhere.globalEnabled", false);
user_pref("extensions.https_everywhere._observatory.submit_during_tor", false);
user_pref("extensions.https_everywhere._observatory.submit_during_nontor", false);
user_pref("extensions.https_everywhere._observatory.use_custom_proxy", true);
user_pref("extensions.https_everywhere._observatory.proxy_host", "127.0.0.1");
user_pref("extensions.https_everywhere._observatory.proxy_port", 8118);

user_pref("extensions.torbutton.use_nontor_proxy", true);

//For socket conversion: in the future, I'll need to make TBB communicate with
//i2p over a unix socket. Fortunately, this is how you do that. It will be
//configurable in a similar way to the host:port configuration when that happens.
//user_pref("extensions.torlauncher.socks_port_use_ipc", );
//user_pref("extensions.torlauncher.socks_ipc_path", "");

user_pref("extensions.torlauncher.start_tor", false);
user_pref("extensions.torlauncher.default_bridge_type", "");
user_pref("extensions.torlauncher.prompt_at_startup", false);


user_pref("network.proxy.no_proxies_on", 1);
user_pref("network.proxy.type", 1);
user_pref("network.proxy.http", "127.0.0.1");
user_pref("network.proxy.http_port", 8118);
user_pref("browser.startup.homepage", "about:blank");

