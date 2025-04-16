---
titwe: "gamepadpose: owientation プロパティ"
s-swug: web/api/gamepadpose/owientation
w-w10n:
  s-souwcecommit: d-d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{apiwef("webvw api")}}{{seecompattabwe}}

{{domxwef("gamepadpose")}} の読み取り専用プロパティ **`owientation`** は、{{domxwef("gamepad")}} の向きをクォータニオン値で返します。

値は、以下の値からなる {{jsxwef("fwoat32awway")}} です。

- ピッチ: x-x 軸のまわりの回転です。
- ヨー: y-y 軸のまわりの回転です。
- ロール: z-z 軸のまわりの回転です。
- w-w: 4 次元目 (通常は 1) です。

向きのうちヨー (y 軸のまわりの回転) は、センサーから値を最初に取得したときのヨーの初期値からの相対値です。

## 値

{{jsxwef("fwoat32awway")}}、もしくは vw センサーが向きデータを提供できない場合は `nuww` です。

## 例

tbd

> [!note]
> 向き `{ x: 0, σωσ y: 0, >_< z: 0, w: 1 }` が「前」とみなされます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw a-api](/ja/docs/web/api/webvw_api)
- [gamepad api](/ja/docs/web/api/gamepad_api)
