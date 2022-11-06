---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/API/permissions
---

{{AddonSidebar}}Enables extensions to request extra permissions at runtime, after they have been installed.

Extensions need permissions to access more powerful WebExtension APIs. They can ask for permissions at install time, by including the permissions they need in the [`permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) manifest.json key. The main advantages of asking for permissions at install time are:

- The user is only asked once, so it's less disruptive for them, and a simpler decision.
- The extension can rely on the access to the APIs it needs, because if already running, the permissions have been granted.

There is not yet a simple GUI, for users to view permissions of their installed WebExtension Add-ons. Users must use about:debugging, go to the Add-ons section, then use the "Manifest Url" link for this Add-on. This shows raw json, which includes a "permissions" block, showing the permissions used by this addon.

With the permissions API, an extension can ask for additional permissions at runtime. These permissions need to be listed in the [`optional_permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) manifest.json key. Note that some permissions are not allowed in `optional_permissions`. The main advantages of this are:

- The extension can run with a smaller set of permissions, except when it actually needs them.
- The extension can handle permission denial in a graceful manner, instead of presenting the user with a global "all or nothing" choice at install time. You can still get a lot out of that map extension, without giving it access to your location, for example.
- The extension may need [host permissions](/zh-CN/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions), but not know at install time which host permissions it needs. For example, the list of hosts may be a user setting. In this scenario, asking for a more specific range of hosts at runtime, can be an alternative to asking for "\<all_urls>" at install time.

To use the permissions API, decide which permissions your extension can request at runtime, and list them in [`optional_permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions). After this, you can request any permissions that were included in `optional_permissions`. Requests may only be made in the handler for a user action (for example, a click handler).For advice on designing your request for runtime permissions, to maximize the likelihood that users grant them, see [Request permissions at runtime](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Request_the_right_permissions#Request_permissions_at_runtime).

## Types

- {{WebExtAPIRef("permissions.Permissions")}}
  - : Represents a set of permissions.

## Methods

- {{WebExtAPIRef("permissions.contains()")}}
  - : Discover an extension's given set of permissions.
- {{WebExtAPIRef("permissions.getAll()")}}
  - : Get all the permissions this extension currently has.
- {{WebExtAPIRef("permissions.remove()")}}
  - : Give up a set of permissions.
- {{WebExtAPIRef("permissions.request()")}}
  - : Ask for a set of permissions.

## Event handlers

- {{WebExtAPIRef("permissions.onAdded")}}
  - : Fired when a new permission is granted.
- {{WebExtAPIRef("permissions.onRemoved")}}
  - : Fired when a permission is removed.

## Browser compatibility

{{Compat}}

## See also

- `manifest.json` [`permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) property
- `manifest.json` [`optional_permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) property

{{WebExtExamples("h2")}}

> **备注：** This API is based on Chromium's [`chrome.permissions`](https://developer.chrome.com/extensions/permissions) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
