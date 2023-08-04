---
title: ユーザーによる有効化によって制御される機能
slug: Web/Security/User_activation
l10n:
  sourceCommit: 199c317d91bf506a81a6f68f53d6c63499651dff
---

{{QuickLinksWithSubpages("/ja/docs/Web/Security")}}

挙動が望むものでないとき悪いユーザー体験をもたらす API をアプリケーションに濫用させないため、ユーザーが「アクティブに操作中」の状態、すなわちユーザーが現在ウェブページを操作しているか、もしくは少なくとも 1 回ページを操作したか、のときのみ使用可能な API があります。ブラウザーは、悪意のあるスクリプトがこれらの機能を濫用するのを防ぐため、ポップアップ、フルスクリーン、振動などの機微な API へのアクセスを制限します。このページでは、ユーザーによる有効化の後にのみ利用可能になるウェブプラットフォームの機能を挙げています。

ユーザーによる有効化は、ユーザーが最近ページを操作した、またはページを読み込んでから操作を完了したことを表します。通常、これはボタンのクリックや他の UI の操作です。

より正確には、_有効化を起こす入力イベント_ とは以下の条件を満たすイベントです。

- [`isTrusted`](/ja/docs/Web/API/Event/isTrusted) 属性が `true` に設定されており、かつ
- 以下の種類のイベントである
  - [`keydown`](/ja/docs/Web/API/Element/keydown_event) (<kbd>Esc</kbd> およびユーザーエージェントによって予約されているショートカットキーを除く)
  - [`mousedown`](/ja/docs/Web/API/Element/mousedown_event)
  - [`pointerdown`](/ja/docs/Web/API/Element/pointerdown_event) (`pointerType` が "mouse" であるとき)
  - [`pointerup`](/ja/docs/Web/API/Element/pointerup_event) (`pointerType` が "mouse" でないとき)
  - [`touchend`](/ja/docs/Web/API/Element/touchend_event)

有効化が起きる時、ユーザーエージェントは「粘着的」と「一時的」の 2 種類のウインドウのユーザーによる有効化状態を区別します。

## 一時的な有効化

{{Glossary("Transient activation", "一時的な有効化")}}は､ユーザーが最近ボタンを押したか､マウスを動かしたか､メニューを使用したか､他の何らかの操作をしたことを表すウインドウの状態です｡一時的な有効化は (他の操作によって更新されなければ) タイムアウトによって無効になり、({{domxref("Window.open()")}} のような) API によって消費されることもあります。

以下が、一時的な有効化を必要とする API の例です。

- [`beforeunload` イベント](/ja/docs/Web/API/Window/beforeunload_event)
- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.readText()")}}
- {{domxref("Clipboard.writeText()")}}
- {{domxref("Document.requestStorageAccess()")}}
- {{domxref("Element.requestFullScreen()")}}
- {{domxref("Element.requestPointerLock()")}}
- `GPUAdapter.requestAdapterInfo()`
- {{domxref("HID.requestDevice()")}}
- {{domxref("HTMLInputElement.showPicker()")}}
- {{domxref("HTMLVideoElement.requestPictureInPicture()")}}
- {{domxref("IdleDetector.requestPermission()")}}
- {{domxref("MediaDevices.selectAudioOutput()")}}
- `MediaStreamTrack.sendCaptureAction()`
- `MediaDevices.getViewportMedia()`
- {{domxref("MediaDevices.getDisplayMedia()")}}
- {{domxref("Navigator.share()")}}
- {{domxref("PaymentRequest.show()")}}
- {{domxref("PresentationRequest.start()")}}
- {{domxref("RemotePlayback.prompt()")}}
- {{domxref("USB.requestDevice()")}}
- {{domxref("Keyboard.lock()")}}
- {{domxref("Window.open()")}}
- {{domxref("Window.showOpenFilePicker()")}}
- {{domxref("Window.showSaveFilePicker()")}}
- {{domxref("Window.showDirectoryPicker()")}}
- `Window.getScreenDetails()`
- `Window.queryLocalFonts()`
- {{domxref("XRSystem.requestSession()")}}

## 粘着的な有効化

{{Glossary("Sticky activation", "粘着的な有効化")}}は、ユーザーがボタンを押したか、マウスを動かしたか、メニューを使用したか、他の何らかの操作をしたことを表すウインドウの状態です。これは、(一時的な有効化と違って) 最初にセットされた後はリセットされません。

以下が､粘着的な有効化を必要とする API の例です｡

- {{domxref("Navigator.vibrate()")}}
- `navigator.getAutoplayPolicy()`
- `navigator.virtualKeyboard.show()`

## UserActivation API

ウインドウで粘着的または一時的なユーザーによる有効化がなされているかどうかをプログラムから識別するため、{{domxref("UserActivation")}} API は {{domxref("navigator.userActivation")}} を通じて利用可能な 2 個のプロパティを提供しています。

- {{domxref("UserActivation.hasBeenActive")}} は、ウインドウで粘着的な有効化がなされているかを表します。
- {{domxref("UserActivation.isActive")}} は、ウインドウで一時的な有効化がなされているかを表します｡

## 関連情報

- {{Glossary("Transient activation", "一時的な有効化")}}
- {{Glossary("Sticky activation", "粘着的な有効化")}}
- {{domxref("UserActivation")}} API
- [安全なコンテキストに制限されている機能](/ja/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
