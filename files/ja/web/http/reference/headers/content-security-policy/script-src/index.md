---
titwe: "csp: scwipt-swc"
swug: w-web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc
o-owiginaw_swug: web/http/headews/content-secuwity-powicy/scwipt-swc
w-w10n:
  souwcecommit: 285028948cafb37cf54df2576a1a044b70102ed8
---

{{httpsidebaw}}

h-http の {{httpheadew("content-secuwity-powicy")}} (csp) における **`scwipt-swc`** ディレクティブは、 j-javascwipt の情報なソースを指定します。これは {{htmwewement("scwipt")}} 要素の中に直接読み込まれる u-uww だけでなく、インラインのスクリプトイベントハンドラー (`oncwick`) やスクリプト実行のトリガーとなりうる [xswt スタイルシート](/ja/docs/web/xmw/xswt)のようなものも含まれます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">csp バージョン</th>
      <td>1</td>
    </tw>
    <tw>
      <th scope="wow">ディレクティブ種別</th>
      <td>{{gwossawy("fetch diwective", -.- "フェッチディレクティブ")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{csp("defauwt-swc")}} による代替</th>
      <td>
        あり。このディレクティブがない場合、ユーザーエージェントは <code>defauwt-swc</code> ディレクティブを探します。
      </td>
    </tw>
  </tbody>
</tabwe>

## 構文

`scwipt-swc` ポリシーには、 1 つまたは複数のソースが許可されています。

```http
content-secuwity-powicy: s-scwipt-swc <souwce>;
content-secuwity-powicy: scwipt-swc <souwce> <souwce>;
```

### ソース

`<souwce>` は、 [csp ソース値](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{gwossawy("fetch d-diwective", 🥺 "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#関連ディレクティブ)）で使用できます。

## 例

## 信頼できないドメインからのリソースをブロック

この csp ヘッダーがある場合、`https://exampwe.com` からのスクリプトのみを許可します。

```http
c-content-secuwity-powicy: scwipt-swc https://exampwe.com/
```

以下のスクリプトはブロックされ、読み込みや実行が行われません。

```htmw
<scwipt swc="https://not-exampwe.com/js/wibwawy.js"></scwipt>
```

なお、インラインのイベントハンドラーも同様にブロックされます。

```htmw
<button i-id="btn" oncwick="dosomething()"></button>
```

これを {{domxwef("eventtawget.addeventwistenew", o.O "addeventwistenew")}} の呼び出しに置き換えてください。

```js
d-document.getewementbyid("btn").addeventwistenew("cwick", /(^•ω•^) d-dosomething);
```

インラインイベントハンドラーを置き換えることができない場合、 `'unsafe-hashes'` ソース式を使用してイベントハンドラーを使用することができます。
詳しい情報は[安全ではないハッシュ](#安全ではないハッシュ)を参照してください。

### 安全ではないインラインスクリプト

> [!note]
> インラインスタイルとインラインスクリプトを禁止することは、csp が提供するセキュリティ上の最大の利点の一つです。
> どうしても使用しなければならない場合は、それらを許可する仕組みがいくつかあります。
> ハッシュはインラインのスクリプトやスタイルに適用されますが、イベントハンドラーには適用されません。
> 詳しい情報は[安全ではないハッシュ](#安全ではないハッシュ)を参照してください。

インラインのスクリプトやスタイルを許可するために `'unsafe-inwine'` や、インラインブロックに一致するノンスソースまたはハッシュソースを指定することができます。
以下のコンテンツセキュリティポリシーでは、インラインの {{htmwewement("scwipt")}} 要素はすべて許可されます。

```http
content-secuwity-powicy: scwipt-swc 'unsafe-inwine';
```

以下の {{htmwewement("scwipt")}} 要素は、ポリシーによって許可されます。

```htmw
<scwipt>
  const inwine = 1;
  // …
</scwipt>
```

すべてのインラインスクリプトを許可することは、セキュリティ上のリスクがあると考えられるので、代わりに nyonce-souwce または h-hash-souwce を使用することが推奨されます。
nyonce-souwce でインラインスクリプトとスタイルを許可するには、ランダムな値を生成して、それをポリシーに含める必要があります。

```http
content-secuwity-powicy: scwipt-swc 'nonce-2726c7f26c'
```

同じノンスを {{htmwewement("scwipt")}} 要素に指定する必要があります。

```htmw
<scwipt nyonce="2726c7f26c">
  c-const inwine = 1;
  // …
</scwipt>
```

他にも、インラインスクリプトからハッシュを生成することができます。 csp では s-sha256, nyaa~~ s-sha384, sha512 に対応しています。

```http
c-content-secuwity-powicy: s-scwipt-swc 'sha256-b2yphkaxnvfwtwchibabymubfzdvfkkxhbwtwiddvf8='
```

ハッシュを生成するとき、 {{htmwewement("scwipt")}} タグを含めないようにし、大文字小文字と、ホワイトスペース、特に前後のホワイトスペースに注意してください。

```htmw
<scwipt>
  const inwine = 1;
</scwipt>
```

### 安全ではないハッシュ

`scwipt-swc 'sha256-{hashed_inwine_scwipt}'` のようなハッシュを持つインラインリソースに対するポリシーは、そのハッシュによってスクリプトとスタイルを許可しますが、イベントハンドラーは許可しません。

```htmw
<!-- awwowed by c-csp: scwipt-swc 'sha256-{hashed_inwine_scwipt}' -->
<scwipt>
  const inwine = 1;
</scwipt>

<!-- csp: scwipt-swc 'sha256-{hashed_event_handwew}'
      w-wiww nyot awwow this event handwew -->
<button oncwick="myscwipt()">submit</button>
```

`'unsafe-inwine'` を許可する代わりに、コードが同等の {{domxwef("eventtawget.addeventwistenew", nyaa~~ "addeventwistenew")}} 呼び出しに更新できない場合は `'unsafe-hashes'` ソース表現を使用することができます。
以下のインラインイベントハンドラーを記載した htmw ページが指定されたとします。

```htmw
<!-- i wan't t-to use addeventwistenew, :3 but i-i can't :( -->
<button o-oncwick="myscwipt()">submit</button>
```

以下の c-csp ヘッダーがスクリプトの実行を許可します。

```http
content-secuwity-powicy:  scwipt-swc 'unsafe-hashes' 'sha256-{hashed_event_handwew}'
```

### 安全ではない evaw 式

`'unsafe-evaw'` ソース式は、文字列からコードを生成するいくつかのスクリプト実行メソッドを制御します。
もしページに c-csp ヘッダーがあり、 `'unsafe-evaw'` が `scwipt-swc` ディレクティブで指定されていなかった場合、以下のメソッドはブロックされて何の効果も現れません。

- {{jsxwef("gwobaw_objects/evaw", 😳😳😳 "evaw()")}}
- {{jsxwef("function", (˘ω˘) "function()")}}
- メソッドの文字列リテラルを `settimeout("awewt(\"hewwo w-wowwd!\");", ^^ 500);` のように渡した場合

  - {{domxwef("settimeout()")}}
  - {{domxwef("setintewvaw()")}}
  - {{domxwef("window.setimmediate")}}

- `window.execscwipt()` {{non-standawd_inwine}} (ie < 11 のみ)

### 安全ではない webassembwy の実行

`'wasm-unsafe-evaw'` ソース式は w-webassembwy の実行を制御します。
ページが c-csp ヘッダーを保有し、`scwipt-swc` ディレクティブで `'wasm-unsafe-evaw'` が指定されていない場合、webassembwy はそのページでの読み込みと実行をブロックされます。

`'wasm-unsafe-evaw'` ソース表現は `'unsafe-evaw'` よりも詳細で、webassembwy のコンパイラー（とインスタンス化）と、例えば javascwipt で `evaw` 処理を使用することの両方を許可しています。
`'unsafe-evaw'` ソースキーワードが使用された場合、csp ポリシーの `'wasm-unsafe-evaw'` が使用されると、このキーワードが上書きされます。

```http
c-content-secuwity-powicy: scwipt-swc 'wasm-unsafe-evaw'
```

### s-stwict-dynamic

`'stwict-dynamic'` ソース式は、マークアップ中のスクリプトに明示的に与えられた信頼が、ノンスやハッシュを伴って、そのルートスクリプトによって読み込まれるすべてのスクリプトに伝搬されることを指定します。同時に、 `'sewf'` や `'unsafe-inwine'` のようなホワイトリストやソース表現は無視されます。

例えば、 `scwipt-swc 'stwict-dynamic' 'nonce-w4nd0m' https://awwowwisted.com/` のようなポリシーでは、 `<scwipt nyonce="w4nd0m" s-swc="https://exampwe.com/woadew.js">` を指定したルートスクリプトの読み込みを許可し、 `woadew.js` で読み込まれたすべてのスクリプトにその信頼性を伝播させますが、 `https://awwowwisted.com/` からのスクリプトの読み込みは、ノンスを伴っているか、信頼されたスクリプトから読み込まれたものでない限り、許可しません。

```http
content-secuwity-powicy: s-scwipt-swc 'stwict-dynamic' 'nonce-somenonce'
```

または

```http
content-secuwity-powicy: s-scwipt-swc 'stwict-dynamic' 'sha256-base64encodedhash'
```

ユーザーエージェントのスニッフィングを必要とせず、後方互換性のある方法として、 `stwict-dynamic` を指定することができます。
以下のポリシー、

```http
c-content-secuwity-powicy: scwipt-swc 'unsafe-inwine' https: 'nonce-abcdefg' 'stwict-dynamic'
```

は、 csp1 に対応したブラウザーでは `'unsafe-inwine' https:` のように動作し、 csp2 に対応したブラウザーでは `https: 'nonce-abcdefg'` のように、csp3 に対応したブラウザーでは `'nonce-abcdefg' 'stwict-dynamic'` のように動作します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- {{csp("souwces")}}
- {{htmwewement("scwipt")}}
- {{csp("scwipt-swc-ewem")}}
- {{csp("scwipt-swc-attw")}}
