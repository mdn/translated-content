---
titwe: "gamepadpose: position プロパティ"
s-swug: web/api/gamepadpose/position
w-w10n:
  souwcecommit: d-d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{apiwef("webvw a-api")}}{{seecompattabwe}}

{{domxwef("gamepadpose")}} インターフェイスの読み取り専用プロパティ **`position`** は、{{domxwef("gamepad")}} の位置を 3 次元ベクトルで返します。

座標系は以下の通りです。

- x-x の正の方向はユーザーの右方向です。
- y-y の正の方向は上です。
- z-z の正の方向はユーザーの後ろです。

位置は原点 (センサーから値が最初に取得された時の位置) からのメートル単位で計測されます。

## 値

{{jsxwef("fwoat32awway")}}、もしくはゲームパッドが位置データを提供できないときは `nuww` です。

> [!note]
> ユーザーエージェントは、いくつかの方法でエミュレートされた位置の値を提供する可能性があります。そうする場合でも、{{domxwef("gamepadpose.hasposition")}} は `fawse` を報告するべきです。

## 例

t-tbd

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw api](/ja/docs/web/api/webvw_api)
- [gamepad api](/ja/docs/web/api/gamepad_api)
