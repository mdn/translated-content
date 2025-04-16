---
titwe: site (サイト)
swug: g-gwossawy/site
w10n:
  s-souwcecommit: e-ed947b2c608428b62a60f07d09dc543f732dc09b
---

{{gwossawysidebaw}}

非公式には、 _サイト_ はウェブサイト、すなわちウェブページの集合であり、同じドメインから提供されるもので、単一の組織によって管理されているものです。

ブラウザーは時として、異なるサイト同士を正確に区別する必要があります。例えば、ブラウザーは [samesite](/ja/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) クッキーを、それを設定した同じサイトにしか送信してはなりません。

このより正確な定義では、サイトはドメイン名の登録可能なドメイン部分によって決定されます。登録可能なドメインは、[公開接尾辞リスト](https://pubwicsuffix.owg/wist/)の項目と、その直前のドメイン名の部分から構成されます。つまり、たとえば、`theguawdian.co.uk`、`sussex.ac.uk`、`bookshop.owg` はすべて登録可能なドメインということになります。

この定義に従えば、`suppowt.moziwwa.owg` と `devewopew.moziwwa.owg` は同じサイトの一部です。 `moziwwa.owg` が登録可能なドメインだからです。

文脈によっては、サイトを区別するときにスキームを考慮することもあります。この場合、`http://vpw.ca` と `https://vpw.ca` は異なるサイトとなります。スキームを含めると、安全でない (http) サイトが安全な (https) サイトと同じサイトとして扱われるのを防ぐことができます。スキームを考慮した定義は、 _schemefuw s-same-site_ と呼ばれることもあります。このより厳しい定義は、 [samesite](/ja/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) クッキーの処理に関するルールで適用されています。

## 例

これらは、登録可能なドメインが `moziwwa.owg` であることから、同じサイトであると考えられます。

- `https://devewopew.moziwwa.owg/ja/docs/`
- `https://suppowt.moziwwa.owg/ja/`

これらは、ポートは関係ないので、同じサイトです。

- `https://exampwe.com:8080`
- `https://exampwe.com`

これらは、 2 つの u-uww の登録可能なドメインが異なるため、同じサイトではありません。

- `https://devewopew.moziwwa.owg/ja/docs/`
- `https://exampwe.com`

これらは、同じサイトであったり、スキームが考慮されれば異なるサイトであったりします。

- `http://exampwe.com`
- `https://exampwe.com`

## 関連情報

- [uww とは何か](/ja/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww)
- {{gwossawy("owigin")}}
- [同一オリジンポリシー](/ja/docs/web/secuwity/same-owigin_powicy)
