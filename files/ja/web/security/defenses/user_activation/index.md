---
title: ユーザーによる活性化
slug: Web/Security/Defenses/User_activation
l10n:
  sourceCommit: 0521262f24b89d6eec3199af0389147bec63d563
---

望ましくない動作が発生した場合にユーザー体験を損なう可能性のある API をアプリケーションが不正利用できないように実現するため、一部の API はユーザーが「活性化した操作」状態にある場合にのみ使用できます。これは、ユーザーが現在ウェブページと操作中であるか、少なくとも一度はページと操作を行った状態を指します。
ブラウザーは、ポップアップ、全画面、バイブレーションなどの機密性の高い API へのアクセスを、アクティブなユーザー操作に制限しています。これにより、悪意のあるスクリプトがこれらの機能を悪用するのを防ぎます。
このページには、ユーザーによる活性化後にのみ利用できるウェブリソースプラットフォームの機能の一覧が掲載されています。

ユーザーによる活性化は、ユーザーが現在ページを操作しているか、ページ読み込み後に操作を完了したかを意味します。
通常、これはボタンクリックやその他の UI 操作を指します。

より正確には、_活性化を起こす入力イベント_ とは以下の条件を満たすイベントです。

- [`isTrusted`](/ja/docs/Web/API/Event/isTrusted) 属性が `true` に設定されており、かつ
- 次のいずれかの種類:
  - [`keydown`](/ja/docs/Web/API/Element/keydown_event)（ただし、<kbd>Esc</kbd>キー、ブラウザーが予約しているショートカット、およびキーボードによって異なる特定のキー（<kbd>Caps Lock</kbd>、<kbd>Num Lock</kbd>、<kbd>Print Screen</kbd>など）は除く。これらのキーはユーザーによる活性化を発生させません。この動作はブラウザーによって異なる場合があります。

  - [`mousedown`](/ja/docs/Web/API/Element/mousedown_event)
  - [`pointerdown`](/ja/docs/Web/API/Element/pointerdown_event) (`pointerType` が "mouse" であるとき)
  - [`pointerup`](/ja/docs/Web/API/Element/pointerup_event) (`pointerType` が "mouse" でないとき)
  - [`touchend`](/ja/docs/Web/API/Element/touchend_event)

活性化が起きる時、ユーザーエージェントは「持続的」と「一時的」の 2 種類のウインドウのユーザーによる活性化状態を区別します。

## 一時的な活性化と持続的な活性化の比較

一時的な活性化と持続的な活性化の違いは、一時的な活性化は短時間しか持続せず、保護された機能が使用されている際に消費（非活性化）される場合があるのに対し、持続的な活性化はセッション終了まで維持される点にある。

一時的な活性化による機能のゲート制御は、ユーザーが直接トリガーした場合にのみ機能を利用可能にします。
これに対し、持続的な活性化の主な用途は、ページ読み込み時に自動的に発生すべきでない機能（例：ポップアップ）を制限することです。

## 一時的な活性化

{{Glossary("Transient activation", "一時的な活性化")}}は､ユーザーが最近ボタンを押したか､他の何らかの操作をしたことを表すウインドウの状態です｡
一時的な活性化は (他の操作によって更新されなければ) タイムアウトによって無効になり、({{domxref("Window.open()")}} のような) API によって消費されることもあります。

一時的な活性化を必要とする API の例です（すべてではありません）。

- {{domxref("Clients.openWindow()")}}
- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.readText()")}}
- {{domxref("Clipboard.write()")}}
- {{domxref("Clipboard.writeText()")}}
- {{domxref("ContactsManager.select()")}}
- {{domxref("Document.requestStorageAccess()")}}
- {{domxref("DocumentPictureInPicture.requestWindow()")}}
- {{domxref("Element.requestFullScreen()")}}
- {{domxref("Element.requestPointerLock()")}}
- {{domxref("EyeDropper.open()")}}
- {{domxref("HID.requestDevice()")}}
- {{domxref("HTMLInputElement.showPicker()")}}
- {{domxref("HTMLSelectElement.showPicker()")}}
- {{domxref("HTMLVideoElement.requestPictureInPicture()")}}
- {{domxref("IdleDetector/requestPermission_static", "IdleDetector.requestPermission()")}}
- {{domxref("Keyboard.lock()")}}
- {{domxref("MediaDevices.getDisplayMedia()")}}
- `MediaDevices.getViewportMedia()`
- {{domxref("MediaDevices.selectAudioOutput()")}}
- `MediaStreamTrack.sendCaptureAction()`
- {{domxref("Navigator.share()")}}
- {{domxref("PaymentRequest.show()")}}
- {{domxref("PresentationRequest.start()")}}
- {{domxref("RemotePlayback.prompt()")}}
- {{domxref("Serial.requestPort()")}}
- {{domxref("USB.requestDevice()")}}
- {{domxref("Window.getScreenDetails()")}}
- {{domxref("Window.open()")}}
- {{domxref("Window.queryLocalFonts()")}}
- {{domxref("Window.showDirectoryPicker()")}}
- {{domxref("Window.showOpenFilePicker()")}}
- {{domxref("Window.showSaveFilePicker()")}}
- {{domxref("WindowClient.focus()")}}
- {{domxref("XRSystem.requestSession()")}}

## 持続的な活性化

{{Glossary("Sticky activation", "持続的な活性化")}}は、セッション中にユーザーがボタンを押下した、メニューを使用した、またはその他のユーザー操作を行ったことを示すウィンドウの状態です。
これは、（一時的な活性化と違って）最初にセットされた後はリセットされません。

以下が､持続的な活性化を必要とする API の例です（すべてではありません）｡

- {{domxref("Window/beforeunload_event", "beforeunload")}} イベント
- {{domxref("Navigator.vibrate()")}}
- {{domxref("VirtualKeyboard.show()")}}
- [メディアとウェブオーディオ API](/ja/docs/Web/Media/Guides/Autoplay) の自動再生（特に [`AudioContexts`](/ja/docs/Web/API/AudioContext)）。

## UserActivation API

ウインドウで持続的または一時的なユーザーによる活性化がなされているかどうかをプログラムから識別するため、 {{domxref("UserActivation")}} API は {{domxref("navigator.userActivation")}} を通じて利用可能な 2 個のプロパティを提供しています。

- {{domxref("UserActivation.hasBeenActive")}} は、ウインドウで持続的な活性化がなされているかを表します。
- {{domxref("UserActivation.isActive")}} は、ウインドウで一時的な活性化がなされているかを表します｡

## 関連情報

- {{Glossary("Transient activation", "一時的な活性化")}}
- {{Glossary("Sticky activation", "持続的な活性化")}}
- {{domxref("UserActivation")}} API
- [保護されたコンテキストに制限されている機能](/ja/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts)
