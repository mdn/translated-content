---
title: HTML 無害化 API
slug: Web/API/HTML_Sanitizer_API
l10n:
  sourceCommit: 8a74d8feac267c1ddc37a4a8bc61e9aa8db75b12
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

**HTML 無害化 API** (HTML Sanitizer API) を使用すると、開発者は HTML 文字列を受け取り、DOM やシャドウ DOM に挿入する際に、不要な要素、属性、その他の HTML エンティティを除去することができます。

## 概念と使い方

ウェブアプリケーションでは、クライアント側で信頼できない HTML を扱う必要があることがよくあります。例えば、クライアント側のテンプレート処理の一環として、ユーザーが作成したコンテンツをレンダリングする場合、あるいは別のサイトからのデータをフレーム内に記載する場合などが挙げられます。

信頼できない HTML を挿入すると、ウェブサイトがさまざまな [種類の攻撃](/ja/docs/Web/Security/Attacks) に対して脆弱になる可能性があります。
特に、[クロスサイトスクリプティング (XSS) 攻撃](/ja/docs/Web/Security/Attacks/XSS)は、信頼できない HTML を DOM に注入し、それを現在のオリジンのコンテキストで JavaScript として実行させることで機能します。これにより、悪意のあるコードが、あたかもそのサイトのオリジンから提供されたかのように実行されてしまいます。
これらの攻撃は、DOM に注入される前に、安全でない HTML 要素や属性を除去することで軽減できます。

HTML 無害化 API には、HTML 入力が DOM に挿入される前に、不要な HTML エンティティを削除するためのさまざまなメソッドが用意されています。
これには、安全でない要素や属性をすべて強制的に除去する XSS 対策済みバージョンと、許可される HTML エンティティを開発者が完全に制御できる、潜在的に安全でないバージョンがあります。

### 無害化メソッド

HTML 無害化 API では、{{domxref("Element")}} や {{domxref("ShadowRoot")}} に HTML 文字列を挿入したり、{{domxref("Document")}} 内で HTML を解釈したりするための、XSS 対策済みのメソッドと XSS 対策なしのメソッドが提供されています。

- 安全なメソッド
  - : {{domxref('Element.setHTML()')}}, {{domxref('ShadowRoot.setHTML()')}}, {{domxref('Document/parseHTML_static','Document.parseHTML()')}}
- 安全でないメソッド
  - : {{domxref('Element.setHTMLUnsafe()')}}, {{domxref('ShadowRoot.setHTMLUnsafe()')}}, {{domxref('Document/parseHTMLUnsafe_static','Document.parseHTMLUnsafe()')}}.

すべてのメソッドは、挿入する HTML と、オプションの {{domxref("Sanitizer")}} または {{domxref("SanitizerConfig")}} を引数として取ります。
サニタイザーオブジェクトは、挿入前に入力からフィルタリングされる HTML エンティティを定義します。
{{domxref('Element')}} メソッドはコンテキストを意識しており、さらに、HTML 仕様で対象要素内にできない要素をすべて削除します。

安全なメソッドは、常に XSS の危険性がある要素や属性を除去します。
サニタイザーが引数として渡されない場合、[デフォルトのサニタイザー設定](#default_sanitizer_configuration)が使用されます。これには、 {{htmlelement("script")}} 要素や `onclick` イベントハンドラーなど、XSSに脆弱な要素や属性に加え、指定された場合に他の種類の攻撃に悪用される可能性のある要素や属性も除去されます。
安全なメソッドで独自のサニタイザーを使用する場合、XSS に対して安全でない要素や属性を除去するように暗黙的に更新されます（なお、渡されたサニタイザー自体は変更されず、安全でないメソッドで使用された場合、依然として安全でないエンティティを許可することができることに注意してください）。

信頼できない HTML コンテンツを挿入する際は、{{domxref("Element.innerHTML")}}, {{domxref("Element.outerHTML")}}, {{domxref("ShadowRoot.innerHTML")}} のいずれかの代わりに、安全なメソッドを使用しましょう。
例えば、ほとんどの場合、デフォルトのサニタイザーを指定した {{domxref('Element.setHTML()')}} を、{{domxref("Element.innerHTML")}} のそのままの代替として使用することができます。
また、XSS 上のリスクがある要素を含まない、信頼できる HTML 文字列を挿入する場合にも、同様のメソッドを使用することができます。

XSS 対策が不十分なメソッドでは、引数として渡されたサニタイザーの設定がそのまま使用されます。
サニタイザーが渡されない場合、コンテキストで許可されているすべての HTML 要素および属性が挿入されます。
これは {{domxref("Element.innerHTML")}} を使用する場合と似ていますが、このメソッドではシャドウルートを構文解析し、コンテキストに適さない要素を削除し、プロパティを使用する際には許可されないそれ以外にもある入力も許可するという点が異なります。

安全でないメソッドは、XSS のリスクがある要素や属性が含まれている、信頼されない HTML でのみ使用すべきです。
これでも安全とは言えませんが、安全でないエンティティを最小限に制限することで、リスクを軽減することができます。
例えば、安全でない HTML を挿入したいものの、何らかの理由で入力に `onblur` ハンドラーを記載する必要がある場合、デフォルトの `Sanitizer` を修正し、以下に示すように安全でないメソッドを使用することで、より安全に処理を行うことができます。

```js
const sanitizer = new Sanitizer(); // デフォルトのサニタイザー
sanitizer.allowAttribute("onblur"); // onblur を許可

someElement.setHTMLUnsafe(untrustedString, { sanitizer });
```

### サニタイザーの設定

サニタイザーの設定では、サニタイザーの使用時に、要素、属性、`data-*` 属性、およびコメントを含め、どの HTML エンティティを許可、置換、または除去するかを定義します。

サニタイザーの設定を定義するには 2 つの方法があり、いずれもすべての無害化メソッドに渡すことができます。

- {{domxref('SanitizerConfig')}} は、許可される要素や属性、およびコメントやデータ属性の許可・省略を示す論理値のプロパティなどを定義する配列を含む辞書オブジェクトです。

  冗長性や曖昧さを縮小するため、具体的な構成では、利用可能な構成オプションの一部のみを指定することができます。
  許可される構成のサブセットについては、下記[許可と除去の設定](#許可と除去の設定)の節にまとめられており、詳細については[有効な構成](/ja/docs/Web/API/SanitizerConfig#valid_configuration)で説明されています。

- {{domxref('Sanitizer')}} は、本質的に {{domxref('SanitizerConfig')}} をラップしたもので、設定を直感的に変更し、その有効性を確実に実現するためのメソッドを提供します。

  例えば、メソッドを使用して許可された要素を追加すると、その要素は `replaceWithChildrenElements` 配列からも同時に除去されます（存在する場合）。
  このインターフェイスは、基盤となる {{domxref('SanitizerConfig')}} のコピーを返すメソッドや、サニタイザーを更新して XSS 対策を行うメソッドも同時に提供しています。
  これにより、その構築で使用されたサニタイザーの設定が正規化され、理解や再利用が容易になることがあります。

どの無害化方法でもどちらのインターフェイスも使用できますが、`Sanitizer` は `SanitizerConfig` よりも共有や再利用の面で効率的であると考えられます。

#### 許可と除去の設定

設定は、次の 2 つの方法で作成可能です。

- 許可設定として、出力で許可する要素や属性のセットを指定します。
- 除去設定として、出力に含まれてはならない項目を指定します。

これらの設定は、構成オブジェクトのフィールド `elements` と `attributes`、および `removeElements` と `removeAttributes` において配列として指定されます。
同じ構成内で、要素または属性について allow 配列と remove 配列の両方を指定することはできませんが、その他のフィールドの組み合わせは許可されています。
次の表は、許可されている組み合わせを示しています。

| 要素の配列                    | 属性の配列                        | 有効？ |
| ----------------------------- | --------------------------------- | ------ |
| `elements`                    | -                                 | ✔️     |
| `elements`                    | `attributes`                      | ✔️     |
| `elements`                    | `removeAttributes`                | ✔️     |
| `removeElements`              | -                                 | ✔️     |
| `removeElements`              | `attributes`                      | ✔️     |
| `removeElements`              | `removeAttributes`                | ✔️     |
| -                             | `attributes`                      | ✔️     |
| -                             | `removeAttributes`                | ✔️     |
| `elements` + `removeElements` | (すべて)                          | ❌     |
| (すべて)                      | `attributes` + `removeAttributes` | ❌     |
| -                             | -                                 | ✔️     |

許可設定では、オプションで、`elements` 配列内の各要素に対する属性を許可するか、および／または除去するかを指定できます。
これらのlocal 属性に対する許可設定は、グローバルな `attributes` または `removedAttributes` が定義されているかどうかによって異なります。
[有効な設定](/ja/docs/Web/API/SanitizerConfig#valid_configuration)の節に、制限事項の概要がまとめられています。

一般的に、「許可設定」は要素と属性の双方にとってより安全です。なぜなら、危険である、あるいは将来的に危険と見なされる可能性があるすべての項目を列挙するのではなく、安全であると分かっている必要な要素や属性をリストアップするからです。
空の設定オブジェクトを指定した場合、空の許可設定が使用されます。

##### 許可設定

「許可設定」を使用すると、許可する（または子要素に置き換える）要素や属性を指定できます。入力に含まれる他の要素や属性はすべて削除されます。
これにより、HTML が構文解析された際に DOM 内でどの要素が許可されるのかが分かりやすくなります。
特定のコンテキストで挿入したいその他の HTML エンティティが正確に分かっている場合に、これらの設定は役立ちます。

許可設定は、[`elements`](/ja/docs/Web/API/SanitizerConfig#elements) や [`attributes`](/ja/docs/Web/API/SanitizerConfig#attributes) の配列（`removeElements` や `removeAttributes` の配列ではありません）を含む {{domxref("SanitizerConfig")}} をラップした `Sanitizer` を定義することで作成します。

例えば、以下の設定は、{{htmlelement("p")}} および {{htmlelement("div")}} 要素、それに許可された要素の `cite` および `onclick` 属性を許可する {{domxref('SanitizerConfig')}} を渡すことで生成されます。
また、{{htmlelement("b")}} 要素は、その子ノードに置き換えられます。

```js
const sanitizer = new Sanitizer({
  elements: ["p", "div"],
  replaceWithChildrenElements: ["b"],
  attributes: ["cite", "onclick"],
});
```

同じ設定は、{{domxref('Sanitizer')}} のメソッドを使用して生成することもできます。
なお、以下のコードでは、`Sanitizer()` コンストラクターに空のオブジェクトが渡されており、その結果、基盤となる設定に `elements` 配列と `attributes` 配列の両方が記載される `Sanitizer` が生成されます。言い換えれば、「許可設定」となります。

```js
// 空のサニタイザーを作成
const sanitizer = new Sanitizer({});

// Sanitizer のメソッドを使用してプロパティを更新
sanitizer.allowElement("p");
sanitizer.allowElement("div");
sanitizer.replaceElementWithChildren("b");
sanitizer.allowAttribute("cite");
sanitizer.allowAttribute("onclick");
```

##### 除去設定

「除去設定」では、除去したい HTML 要素と属性を指定します。他の要素や属性は、サニタイザーによって許可されます（ただし、安全なサニタイザーメソッドを使用している場合や、その要素がコンテキストで許可されていない場合は、ブロックされることがあります）。

除去設定は、[`removeElements`](/ja/docs/Web/API/SanitizerConfig#removeelements) や [`removeAttributes`](/ja/docs/Web/API/SanitizerConfig#removeattributes) の配列（`elements` や `attributes` の配列ではありません）を含む {{domxreg("SanitizerConfig")}} を使用して作成します。

例えば、次のような `Sanitizer` の設定では、前回コードで許可されていたのと同じ要素が除去されます。

```js
const sanitizer = new Sanitizer({
  removeElements: ["p", "div"],
  removeAttributes: ["cite", "onclick"],
  replaceWithChildrenElements: ["b"],
});
```

この設定は、{{domxref('Sanitizer')}} のメソッドを使用して作成することもできます。
この「除去設定」を作成するには、オブジェクトの構築時に `removeElements` または `removeAttributes` の配列を宣言する必要があります（いずれか一方の配列のみが指定された場合、もう一方の配列は正規化の一部として定義されます）。

```js
const sanitizer = new Sanitizer({
  removeElements: [],
});
sanitizer.removeElement("p");
sanitizer.removeElement("div");
sanitizer.replaceElementWithChildren("b");
sanitizer.removeAttribute("cite");
sanitizer.removeAttribute("onclick");
```

#### `Sanitizer` 設定への追加や除去

{{domxref("Sanitizer")}} は、再利用や変更する可能性がある設定オブジェクトを使用する場合に推奨されます。
サニタイザーに許可設定または除去設定があるかどうかは、オブジェクトを作成する際に渡される {{domxref("SanitizerConfig")}} によって決まります。
例えば、`elements` または `attributes` 配列（あるいは空のオブジェクト）を含む設定オブジェクトを渡した場合、サニタイザーには許可設定が適用されます。

上記の例では、許可設定を生成し、{{domxref("Sanitizer/allowElement","allowElement()")}}, {{domxref("Sanitizer/allowAttribute","allowAttribute()")}}, {{domxref("Sanitizer/replaceElementWithChildren","replaceElementWithChildren()")}} を呼び出して、追加の要素や属性を許可しました。同様に、除去設定を生成し、{{domxref("Sanitizer/removeElement","removeElement()")}} と {{domxref("Sanitizer/removeAttribute","removeAttribute()")}} を呼び出して、除去する追加の要素を指定しました。

同時に、除去設定に対して `allow` メソッドを呼び出したり、許可設定に対して `remove` メソッドを呼び出したりすることもできますが、その動作は異なります。
`allow` サニタイザーに対して `allow` メソッドを呼び出すと、指定された要素と属性が、基盤となる `elements` および `attributes` 配列に追加されます。
しかし、除去サニタイザーに対してこれらのメソッドが呼び出された場合、`elements` や `attributes` 配列は存在しません。その代わりに、指定された要素は、存在する場合、対応する `removeElements` または `removeAttributes` 配列から除去されます。
これは、許可サニタイザーで要素をすることができることは、除去サニタイザーで要素を「除去しない」ことと同じであるため、うまくいきます。

`Sanitizer` のすべてのメソッドは、許可サニタイザーまたは除去サニタイザーのいずれに対しても呼び出すことができ、そのメソッドは有効な構成となるよう、可能な限りの変更を行います。
例えば、要素を追加した場合、そのメソッドはサニタイザーのタイプに応じて、その要素を `elements` に追加するか、`removeElements` に存在すればそこから除去します。また、[`replaceWithChildrenElements`](/ja/docs/Web/API/SanitizerConfig#replacewithchildrenelements) 配列に存在すれば、そこから同じ要素を除去します。

許可設定ではできる操作の一部が、除去設定ではできません。
例えば、要素ごとの属性は `elements` 配列で定義されますが、除去サニタイザーにはこの配列が存在しません。

これらのメソッドは、基盤となる設定を変更したかどうかを示すために `true` または `false` を返します。
したがって、許可設定に対して `allowElement()` を呼び出し、指定された要素が存在しない場合、その要素は `elements` 配列に追加され、メソッドは `true` を返します。
しかし、要素がすでに存在している場合は、メソッドは `false` を返します。
なお、要素ごとの属性を設定するために同じメソッドを呼び出した場合、変更を行うことができないため、サニタイザーの除去に対して呼び出された場合は `false` が返されます。

### 組み込み設定

#### XSS 対策済みベースライン設定

XSS 対策済みのベースライン設定では、入力を XSS 対策済みにするために除去されるアイテムを定義しています。

- {{htmlelement("embed")}}, {{htmlelement("frame")}}, {{htmlelement("iframe")}}, {{htmlelement("object")}}, {{htmlelement("script")}}, {{SVGElement("use")}}
- `onafterprint` や `onbeforeinput` といった具合に、すべてのイベントハンドラーのコンテンツ属性です。

この設定は、{{domxref("Element.setHTML()")}} およびそれ以外にも[安全な無害化メソッド](#sanitization_methods)に自動的に適用され、渡されたサニタイザーによって許可された場合でも、XSS に対して安全でない要素が出力から確実に除去されるように実現します。
同時に、{{domxref("Sanitizer")}} インスタンスに対して {{domxref("Sanitizer/removeUnsafe","removeUnsafe")}} を呼び出すことで、この設定を適用し、XSS 対策を行うことも可能です。

#### デフォルトの無害化設定

デフォルトのサニタイザー設定は、XSS 対策の基準よりも厳格になっています。
これは、{{domxref("Element.setHTML()")}} やそれ以外の [安全な無害化メソッド](#sanitization_methods) を呼び出す際に、サニタイザーオブジェクトを渡さない場合に使用されるサニタイザーを定義しています。
また、設定が指定されていない場合に [`Sanitizer()` コンストラクター](/ja/docs/Web/API/Sanitizer/Sanitizer)から返される設定でもあります。

この設定により、以下の種類のアイテムが除去されます。

1. XSS に対して安全ではないとされているもの（[XSS 対策済みベースライン設定](#xss_対策済みベースライン設定)に指定されている通り）。
2. クリックジャッキング、スプーフィング、その他の攻撃に使用されているその他のアイテム。
3. コメントおよび `data-*` 属性。

したがって、このサニタイザーは攻撃対象領域を最小限に抑えつつ、無害化のほとんどの用途に適しています。

許可されている要素および属性の一覧については、[デフォルトのサニタイザー設定](/ja/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration)をご覧ください。

### 無害化と信頼型

[信頼型 API](/ja/docs/Web/API/Trusted_Types_API) は、入力が実行される可能性がある API に渡される前に、ユーザー指定の変換関数を通過することを確実に実現する仕組みを提供します。
この変換関数は、入力の無害化に最もよく使用されますが、必ずしもそうである必要はありません。この API の主な目的は、開発者が無害化処理のコードを監査しやすくすることであり、無害化がどのように、あるいは行われるかどうかを定義することではありません。

安全な HTML の無害化手法では、信頼型は使用されません。
入力された HTML が挿入される前に、常にすべての XSS リスクのあるエンティティがフィルタリングされるため、入力文字列を無害化したり、メソッドを監査したりする必要はありません。

ただし、安全でない HTML 無害化メソッドは、使用する無害化ツールによっては信頼できないHTMLを挿入してしまうことがあるため、信頼型でのみ動作します。
これらのメソッドは、入力として文字列または `TrustedType` のいずれかを受け取ることができます。
サニタイザーも指定された場合、まず変換関数が実行され、その後サニタイザーが実行されます。

この場合、変換関数の動作はウェブサイトのポリシー（安全でないメソッドの使用をすべて拒否するといったもの）に依存することに注意してください。

### サードパーティの無害化ライブラリー

無害化 API が登場する以前は、開発者は通常、[DOMPurify](https://github.com/cure53/DOMPurify) などのサードパーティー製ライブラリーを使用して入力文字列をフィルタリングしていました。これらは、信頼型の変換関数から呼び出されることもありました。

安全な HTML 無害化メソッドを使用する場合、API はブラウザーに統合されており、外部の HTML パーサーライブラリーよりも解析コンテキストや実行が許可されるコードについてより詳細に把握しているため、これらは不要となるはずです。

ウェブサイトの信頼型ポリシーによっては、安全でない HTML メソッドや信頼型を使用する際に役立つ場合があります。

## インターフェイス

- {{domxref('Sanitizer')}}
  - : 信頼できない HTML 文字列を無害化する際、どの要素や属性を許可または除去すべきかを定義する、再利用可能な無害化設定オブジェクトです。
    これは、HTML 文字列を DOM や Document に挿入するメソッドで使用されます。
- {{domxref('SanitizerConfig')}}
  - : サニタイザーの設定を定義する辞書です。
    これは {{domxref("Sanitizer')}} と同じ場所で使用できますが、使用や再利用の効率は劣る可能性があります。

## 他のインターフェイスへの拡張

### XSS 対策済みメソッド

- {{domxref('Element.setHTML()')}}
  - : HTML 文字列をノードのサブツリーとして構文解析し、その要素のコンテキストで不正な要素をすべて削除します。
    次に、サニタイザーの設定で許可されていない要素や属性、および（設定で許可されている場合でも）XSS のリスクがあるとみなされる要素や属性をすべて削除します。
    その後、そのサブツリーを、その要素のサブツリーとして DOM に挿入します。
- {{domxref('ShadowRoot.setHTML()')}}
  - : HTML 文字列をノードのサブツリーとして構文解析します。
    その後、サニタイザーの設定で許可されていない要素や属性、および（設定で許可されている場合でも）XSS のリスクがあるとみなされる要素や属性をすべて削除します。
    その後、そのサブツリーは `ShadowRoot` のサブツリーとして挿入されます。
- {{domxref('Document/parseHTML_static','Document.parseHTML()')}}
  - : HTMLの文字列をノードのサブツリーとして構文解析します。
    その後、サニタイザーの設定で許可されていない要素や属性、および（設定で許可されている場合でも）XSS のリスクがあるとみなされる要素や属性をすべて削除します。
    その後、そのサブツリーが {{domxref("Document")}} のルートとして設定されます。

### XSS 非対策メソッド

- {{domxref('Element.setHTMLUnsafe()')}}
  - : HTML 文字列をノードのサブツリーとして構文解析し、その要素のコンテキストで不正な要素はすべて除外します。
    次に、サニタイザーで許可されていない要素や属性をすべて除外します。サニタイザーが指定されていない場合は、すべての要素を許可します。
    その後、そのサブツリーは、その要素のサブツリーとして DOM に挿入されます。
- {{domxref('ShadowRoot.setHTMLUnsafe()')}}
  - : HTML 文字列をノードのサブツリーとして構文解析します。
    その後、サニタイザーで許可されていない要素や属性をすべて削除します。サニタイザーが指定されていない場合は、すべての要素をすることができる。
    その後、そのサブツリーは `ShadowRoot` のサブツリーとして挿入されます。
- {{domxref('Document/parseHTMLUnsafe_static','Document.parseHTMLUnsafe()')}}
  - : HTML の文字列をノードのサブツリーとして構文解析します。
    その後、サニタイザーで許可されていない要素や属性をすべて削除します。サニタイザーが指定されていない場合は、すべての要素を許可します。
    その後、そのサブツリーが {{domxref("Document")}} のルートとして設定されます。

## 例

以下の例では、デフォルトのサニタイザーを使用してサニタイザー API を使用する方法を示します。

### デフォルトのサニタイザーで `Element.setHTML()` を使用

ほとんどの場合、サニタイザーを渡さずに `Element.setHTML()` を呼び出すことで、{{domxref("Element.innerHTML")}} のそのままの代替として使用することができます。
下記コードは、ID が `target` の要素に HTML 入力を挿入する前に、このメソッドを使用して入力を無害化する方法を示しています。

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def"; // 信頼されない HTML （おそらくユーザー入力から）
const someTargetElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(target.innerHTML); // abc def
```

`{{htmlelement("script")}}` 要素は、デフォルトのサニタイザーや `setHTML()` メソッドでは許可されていないため、`alert()` が除去されます。
なお、デフォルトのサニタイザーで `Element.setHTMLUnsafe()` を使用した場合も、同じ HTML エンティティが無害化される点にご注意ください。
主な違いは、信頼型と共にこのメソッドを使用した場合、監査の対象となる可能性があるという点です。

```js
someElement.setHTMLUnsafe(untrustedString);
```

### サニタイザーの許可設定の使用

このコードは、{{htmlelement("p")}}、{{htmlelement("b")}}、{{htmlelement("div")}} 要素のみを許可するサニタイザーを使用して、`Element.setHTMLUnsafe()` をどのように使用するかを示しています。
入力文字列に含まれる他の要素はすべて除去されます。

```js
const sanitizer = new Sanitizer({ elements: ["p", "b", "div"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer });
```

なお、この場合は通常、`setHTML()` を使用しましょう。
XSS 対策が不十分な要素や属性の使用を許可する必要がある場合にのみ、`Element.setHTMLUnsafe()` を使用しましょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
