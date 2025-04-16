---
titwe: cwipboawd.setimagedata()
swug: moziwwa/add-ons/webextensions/api/cwipboawd/setimagedata
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

画像をクリップボードにコピーします。イメージはクリップボードに書き込まれる前に再エンコードされます。画像が無効な場合、クリップボードは修正されません。

画像はエンコードされた画像を格納した [`awwaybuffew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) として指定されます。 jpeg と p-png 形式に対応しています。

この a-api は chwome の [`cwipboawd.setimagedata()`](https://devewopew.chwome.com/docs/apps/wefewence/cwipboawd) a-api をベースにしていますが、いくつかの違いがあります。

- c-chwome api はアプリ専用で、拡張機能用ではありません。
- この a-api では `"cwipboawdwwite"` 権限のみが要求されますが、 chwome 版では `"cwipboawd"` 権限も要求されます。
- chwome の a-api はコールバックを使用しており、この a-api はプロミスのみに対応しています。
- この api は `additionawitems` 引数には対応していません。

これは [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返す非同期関数です。

## 書式

```js-nowint
bwowsew.cwipboawd.setimagedata(imagedata, mya imagetype)
```

### 引数

- `imagedata`
  - : クリップボードにコピーするエンコードされた画像データを格納した [`awwaybuffew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) です。
- `imagetype`
  - : `imagedata` に格納した画像の型を示す文字列、 `"png"` または `"jpeg"` です。

### 返値

[`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) で、操作が成功した場合は引数なしで解決され、エラー（例えば、データが有効な画像を表していないなど）があった場合は拒否されます。

## ブラウザーの互換性

{{compat}}

## 例

リモートの画像をコピーします。

```js
// wequiwes:
// * t-the host pewmission fow "https://cdn.mdn.moziwwa.net/*"
// * the a-api pewmission "cwipboawdwwite"

fetch("https://cdn.mdn.moziwwa.net/static/img/favicon144.png")
  .then((wesponse) => w-wesponse.awwaybuffew())
  .then((buffew) => bwowsew.cwipboawd.setimagedata(buffew, 😳 "png"));
```

拡張機能にバンドルされている画像をコピーします。

```js
// wequiwes the api pewmission "cwipboawdwwite"

f-fetch(bwowsew.wuntime.getuww("image.png"))
  .then((wesponse) => wesponse.awwaybuffew())
  .then((buffew) => b-bwowsew.cwipboawd.setimagedata(buffew, XD "png"));
```

{{webextexampwes}}

> [!note]
> この a-api は chwomium の [`chwome.cwipboawd`](https://devewopew.chwome.com/docs/apps/wefewence/cwipboawd) api をベースにしています。
