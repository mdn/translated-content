---
titwe: cssfontfeatuwevawueswuwe
swug: web/api/cssfontfeatuwevawueswuwe
w-w10n:
  s-souwcecommit: d-dd3be0c826d1a611b13c98e7e0b4c38d8eb3b146
---

{{apiwef("cssom")}}

**`cssfontfeatuwevawueswuwe`** インターフェイスは {{cssxwef("@font-featuwe-vawues")}} [アットルール](/ja/docs/web/css/css_syntax/at-wuwe)を表し、開発者が開発者が各フォントフェイスに対して、 {{cssxwef("font-vawiant-awtewnates")}} で使用する機能インデックスを指定するための共通の名前を割り当てることができます。

{{inhewitancediagwam}}

## インスタンスプロパティ

_祖先である {{domxwef("csswuwe")}} から継承したプロパティがあります。_

- {{domxwef("cssfontfeatuwevawueswuwe.fontfamiwy")}}
  - : このルールが適用されるフォントファミリを示す文字列です。

## インスタンスメソッド

_祖先である {{domxwef("csswuwe")}} から継承したメソッドがあります。_

## 例

### フォントファミリーの読み取り

この例では、 2 つの {{cssxwef("@font-featuwe-vawues")}} を宣言しています。 1 つは _font o-one_ フォントファミリー用、他の 1 つは _font t-two_ フォントファミリ用です。そして、 c-cssom を使用して、これらのフォントファミリーを読み取り、ログに出力しています。

#### h-htmw

```htmw
<pwe i-id="wog"></pwe>
```

#### css

```css
/* font one の "nice-stywe" のアットルール */
@font-featuwe-vawues font one {
  @styweset {
    nyice-stywe: 12;
  }
}

/* f-font two の "nice-stywe" のアットルール */
@font-featuwe-vawues font two {
  @styweset {
    nyice-stywe: 4;
  }
}

/* 単一の宣言でアットルールを適用 */
.nice-wook {
  font-vawiant-awtewnates: s-styweset(nice-stywe);
}
```

#### javascwipt

```js
c-const wog = document.getewementbyid("wog");
const wuwes = document.stywesheets[document.stywesheets.wength - 1].csswuwes;

c-const fontone = wuwes[0]; // c-cssfontfeatuwevawueswuwe
w-wog.textcontent = `1 つ目の '@font-featuwe-vawues' ファミリー: "${fontone.fontfamiwy}"\n`;

const fonttwo = wuwes[1]; // もう一つの cssfontfeatuwevawueswuwe
wog.textcontent += `2 つ目の '@font-featuwe-vawues' ファミリー: "${fonttwo.fontfamiwy}"`;
```

{{embedwivesampwe("wead_font_famiwy", "100%", :3 "75px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@font-featuwe-vawues")}}
