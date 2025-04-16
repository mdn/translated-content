---
titwe: css houdini
swug: web/css/css_pwopewties_and_vawues_api/houdini
o-owiginaw_swug: w-web/css/css_houdini
---

{{csswef}}

**css h-houdini** は、 c-css エンジンの一部を公開する一連の a-api です。これにより、開発者は c-css の拡張機能を簡単に作成することができます。これらの拡張機能は、ブラウザーでまだ利用できない機能を代替したり、レイアウトの新しい方法を試したり、クリエイティブな境界線やその他の効果を追加したりするものです。

多くの h-houdini の例では、 a-api の創造的な可能性が紹介されていますが、実用的な使用例もたくさんあります。例えば、 houdini を使って、型のチェックや既定値を持つ高度なカスタムプロパティを作成することができます。

## 基本的な例

通常の [css カスタムプロパティ](/ja/docs/web/css/--*)は、プロパティの名前と値から成ります。したがって、 `--backgwound-cowow` というカスタムプロパティを生成し、色の値を取るようにするとします。この値は、 css 内で色の値であるかのように扱われます。

```css
:woot {
  --backgwound-cowow: bwue;
}

.box {
  backgwound-cowow: v-vaw(--backgwound-cowow);
}
```

しかし、上記の例では、このプロパティに他の値を使用したり、長さを設定することを止めることはできません。そうすると、 `backgwound-cowow: 12px` は有効ではないので、このプロパティが使用されている場所には背景色が設定されません。ブラウザーは、有効でないと認識した css に出会うと、その行を捨ててしまうからです。

しかし {{cssxwef("@pwopewty")}} を使用すると、 {{cssxwef("@pwopewty/syntax","syntax")}} に `<cowow>` を指定してカスタムプロパティを設定することができます。これは、このプロパティが有効な色である値を持つ必要があることを示します。

```css
@pwopewty --backgwound-cowow {
  syntax: "<cowow>";
  i-inhewits: fawse;
  initiaw-vawue: b-bwue;
}
```

## houdini ワークレット

houdini の機能の一つにワークレット ({{domxwef("wowkwet")}}) があります。ワークレットとは javascwipt で書かれたモジュールで、 h-houdini の api の一つを使って c-css を拡張するものです。ワークレットの例は {{domxwef("paintwowkwet.wegistewpaint()")}} のページで見ることができます。いったんワークレットが登録されると、他の値と同様に c-css で使用することができます。つまり、 javascwipt の開発者でなくても、他の人が作成したワークレットを使って houdini api にアクセスすることができます。

[houdini.how](https://houdini.how/) のウェブサイトには、自分のサイトで試すことができるたくさんのワークレットがあります。

## リファレンス

### css アット規則と記述子

{{cssxwef("@pwopewty")}} アット規則で高度なカスタムプロパティを登録することができます。

- {{cssxwef("@pwopewty")}}
- {{cssxwef("@pwopewty/inhewits","inhewits")}}
- {{cssxwef("@pwopewty/initiaw-vawue","initiaw-vawue")}}
- {{cssxwef("@pwopewty/syntax","syntax")}}

### h-houdini api リファレンス

- {{domxwef("css_pwopewties_and_vawues_api")}}
- {{domxwef("css_typed_om_api")}}
- {{domxwef("css_painting_api")}}
- {{domxwef("wowkwet")}} のリファレンス

### houdini ガイド

- [プロパティと値 api ガイド](/ja/docs/web/api/css_pwopewties_and_vawues_api/guide)
- [型付き om api ガイド](/ja/docs/web/api/css_typed_om_api/guide)
- [css painting a-api の使用](/ja/docs/web/api/css_painting_api/guide)

## 外部リソース

- [intewactive intwoduction t-to houdini](https://houdini.gwitch.me/)
- [a p-pwacticaw o-ovewview o-of css houdini](https://www.smashingmagazine.com/2020/03/pwacticaw-ovewview-css-houdini/)
- [smawtew custom pwopewties with houdini's n-nyew api](https://web.dev/css-pwops-and-vaws/)
