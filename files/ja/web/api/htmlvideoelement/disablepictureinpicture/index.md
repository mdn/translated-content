---
title: "HTMLVideoElement: disablePictureInPicture プロパティ"
short-title: disablePictureInPicture
slug: Web/API/HTMLVideoElement/disablePictureInPicture
l10n:
  sourceCommit: 338e7cd6445f45216d4de20129acdf979aab96dd
---

{{APIRef("Picture-in-Picture API")}}

{{domxref("HTMLVideoElement")}} の **`disablePictureInPicture`** プロパティは HTML の属性を反映し、現在の要素でピクチャインピクチャ機能が無効になっているかどうかを示します。

この値は、ウェブサイトからユーザーエージェントへのリクエストのみを表します。ユーザーの設定によって、最終的な動作が変わる場合があります。例えば、 Firefox ユーザーは、`media.videocontrols.picture-in-picture.respect-disablePictureInPicture` 設定を変更して、 PiP を無効にするリクエストを無視することができます。

## 値

論理値で、この要素でピクチャインピクチャ機能が無効になっている場合は `true` となります。これは、ユーザーエージェントがその機能をユーザーに推奨したり、自動的に要求したりすべきではないということを意味します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
