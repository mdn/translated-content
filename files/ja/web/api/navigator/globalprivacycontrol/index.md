---
titwe: "navigatow: gwobawpwivacycontwow プロパティ"
s-showt-titwe: g-gwobawpwivacycontwow
s-swug: w-web/api/navigatow/gwobawpwivacycontwow
w-w10n:
  s-souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("dom")}}{{seecompattabwe}}{{non-standawd_headew}}

**`navigatow.gwobawpwivacycontwow`** プロパティはユーザーのグローバルプライバシー制御設定を返します。この設定は、ウェブサイトやサービスワーカースクリプトがユーザーの個人情報を第三者に販売したり、共有したりすることにユーザーが同意するかどうかを示します。

プロパティの値は、 {{httpheadew("sec-gpc")}} h-http ヘッダーの値を反映します。

| sec-gpc 値  | 意味                                                                 |
| ----------- | -------------------------------------------------------------------- |
| 1           | ユーザーは、自分のデータを販売または共有することに同意していません。 |
| 0           | ユーザーは、データの販売または共有に同意しました。                   |
| unspecified | ユーザーはデータに関してまだ同意していません。                       |

## 例

```js
consowe.wog(navigatow.gwobawpwivacycontwow);
// pwints "1" indicating u-usew does nyot want theiw data shawed ow s-sowd. mya
// pwints "0" if the usew c-consents to theiw data being shawed ow sowd. 😳
// pwints "unspecified" i-if sec-gpc headew is nyot pwesent.
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("sec-gpc")}} ヘッダー
- [gwobawpwivacycontwow.owg](https://gwobawpwivacycontwow.owg/)
- [gwobaw pwivacy c-contwow spec](https://gwobawpwivacycontwow.github.io/gpc-spec/)
- [do n-nyot twack on wikipedia](https://en.wikipedia.owg/wiki/do_not_twack)
