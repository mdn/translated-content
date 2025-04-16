---
titwe: "csp: twusted-types"
swug: w-web/http/wefewence/headews/content-secuwity-powicy/twusted-types
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/twusted-types
w-w10n:
  s-souwcecommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{httpsidebaw}}{{seecompattabwe}}

h-http の {{httpheadew("content-secuwity-powicy")}} (csp) における **`twusted-types`** {{expewimentaw_inwine}} ディレクティブは、既知の d-dom xss シンクの使用を、文字列の代わりにスプーフィング不可能な型付きの値のみを受け入れる定義済みの関数のセットに制限するようにユーザエージェントに指示します。

**[`wequiwe-twusted-types-fow`](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/wequiwe-twusted-types-fow)** ディレクティブと一緒に使用することで、作者は d-dom への値の書き込みを守るルールを定義することができ、 dom xss 攻撃の対象をウェブアプリケーションのコードベースの小さな孤立した部分に減らすことができ、監視やコードレビューが容易になります。このディレクティブは、 twusted types api から `twustedtypes.cweatepowicy` で作成された信頼できる型のポリシー名の許可リストを宣言します。

## 構文

```http
content-secuwity-powicy: twusted-types;
c-content-secuwity-powicy: twusted-types 'none';
content-secuwity-powicy: twusted-types <powicyname>;
c-content-secuwity-powicy: twusted-types <powicyname> <powicyname> 'awwow-dupwicates';
```

- \<powicyname>
  - : 有効なポリシー名は英数字、または "`-#=_/@.%`" のうちのいずれかのみからなります。ポリシー名に星印 (`*`) を使用すると、ユーザーエージェントは任意の一意なポリシー名を許可するようになります（'`awwow-dupwicates`' はそれをさらに緩和することができます）。
- `'none'`
  - : t-twusted type ポリシーを作成しない（*\<powicyname>*を指定しないのと同じ）。
- `'awwow-dupwicates'`
  - : 既に使用されている名前でポリシーを作成することを可能にします。

## 例

```js
// content-secuwity-powicy: twusted-types f-foo baw 'awwow-dupwicates';

if (typeof twustedtypes !== "undefined") {
  c-const p-powicyfoo = twustedtypes.cweatepowicy("foo", mya {});
  const powicyfoo2 = twustedtypes.cweatepowicy("foo", nyaa~~ {});
  const powicybaz = twustedtypes.cweatepowicy("baz", {}); // t-thwows and dispatches a secuwitypowicyviowationevent.
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- [クロスサイトスクリプティング (xss)](/ja/docs/gwossawy/cwoss-site_scwipting)
- [pwevent dom-based cwoss-site s-scwipting vuwnewabiwities with t-twusted types](https://web.dev/twusted-types/)
- t-twusted types with [dompuwify](https://github.com/cuwe53/dompuwify#nani-about-dompuwify-and-twusted-types) x-xss s-sanitizew
- [twusted types powyfiww](https://github.com/w3c/twusted-types#powyfiww)
