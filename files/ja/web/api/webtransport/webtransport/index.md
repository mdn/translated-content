---
title: "WebTransport: WebTransport() コンストラクター"
short-title: WebTransport()
slug: Web/API/WebTransport/WebTransport
l10n:
  sourceCommit: 98b1752bbde3987c1c445b038aa4a463dccff6b8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`WebTransport()`** コンストラクターは新しい {{domxref("WebTransport")}} オブジェクトのインスタンスを作成します。

## 構文

```js-nolint
new WebTransport(url)
new WebTransport(url, options)
```

### 引数

- `url`
  - : 接続先 HTTP/3 サーバーの URL を表す文字列です。
    スキームは HTTPS で、ポート番号を明示する必要があります。
- `options` {{optional_inline}}
  - : 次のプロパティを持つことがあるオブジェクトです。
    - `allowPooling` {{optional_inline}}
      - : 論理値です。
        `true` の場合、この {{domxref("WebTransport")}} のネットワーク接続を、他の HTTP/3 セッションのプールと共有できます。
        デフォルト値は `false` で、接続は共有できません。
    - `anticipatedConcurrentIncomingBidirectionalStreams` {{optional_inline}} {{experimental_inline}}
      - : アプリケーションがサーバーに同時に開いておくよう期待する受信双方向ストリームの数を示す、`0` から `65535` までの整数または `null` です。

        これは、ブラウザーがサーバーによって開かれるストリームの上限を事前に引き上げるために利用できるヒントです。
        デフォルト値は `null` で、ヒントは指定されません。
        この値は、後から {{domxref("WebTransport.anticipatedConcurrentIncomingBidirectionalStreams","anticipatedConcurrentIncomingBidirectionalStreams")}} プロパティで取得できます。

    - `anticipatedConcurrentIncomingUnidirectionalStreams` {{optional_inline}} {{experimental_inline}}
      - : アプリケーションがサーバーに同時に開いておくよう期待する受信単方向ストリームの数を示す、`0` から `65535` までの整数または `null` です。

        これは、ブラウザーがサーバーによって開かれるストリームの上限を事前に引き上げるために利用できるヒントです。
        デフォルト値は `null` で、ヒントは指定されません。
        この値は、後から {{domxref("WebTransport.anticipatedConcurrentIncomingUnidirectionalStreams","anticipatedConcurrentIncomingUnidirectionalStreams")}} プロパティで取得できます。

    - `congestionControl` {{optional_inline}}
      - : この接続でデータを送信する際に使用する輻輳制御アルゴリズムを、スループット向けまたは低レイテンシー向けに調整するというアプリケーションの希望を示す文字列です。
        これはユーザーエージェントへのヒントです。
        許可される値は `default`（デフォルト）、`throughput`、`low-latency` です。
    - `datagramsReadableType` {{optional_inline}}
      - : 新しいトランスポートが受信データグラムに使用する {{domxref("ReadableStream")}} の型を設定する文字列です。
        このストリームには `transport.datagrams.readable` でアクセスします（{{domxref("WebTransport.datagrams")}} および {{domxref("WebTransportDatagramDuplexStream.readable")}} を参照）。
        許可される値は `bytes` のみで、これを指定すると[読み取り可能なバイトストリーム](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)が作成されます。
        このストリームは {{domxref("ReadableStreamBYOBReader")}} で読み取ることができ、各データグラムを指定したバッファーに読み込みます。
        このオプションを省略すると、デフォルトの読み取り可能なストリームが作成されます。このストリームでは、各チャンクが 1 つのデータグラムを含む新しい {{jsxref("Uint8Array")}} になります。

        独自のバッファーに読み込むと、データグラムごとにブラウザーが新しいメモリーを割り当てる代わりに、同じメモリーを再利用できます。
        これは、ゲームの状態やセンサーの更新など、アプリケーションがデータグラムを高頻度で受信する場合に特に役立ちます。

        {{domxref("ReadableStreamBYOBReader.read#min", "min")}} オプションを使用しない限り、読み取りごとに 1 つのデータグラムが返されます。
        指定したバッファーがデータグラムより小さい場合、ストリームでエラーが発生し、保留中の {{domxref("ReadableStreamBYOBReader.read()", "read()")}} は {{jsxref("RangeError")}} で拒否されます。
        これを避けるには、少なくとも 64 KiB（65536 バイト）のバッファーを使用してください。これは、データグラムを伝送する {{Glossary("QUIC")}} フレームの推奨最大サイズです。
        `read()` に渡すビューには {{jsxref("Uint8Array")}} を使用してください。{{jsxref("DataView")}} または複数バイト要素を持つ型付き配列を使用するとストリームでエラーが発生し、`read()` は {{jsxref("TypeError")}} で拒否されます。

        > [!NOTE]
        > バイトストリームではデータグラムの境界が完全には維持されません。空のデータグラムは配信されず、[`min`](/ja/docs/Web/API/ReadableStreamBYOBReader/read#min) オプションを指定して読み取ると、複数のデータグラムが 1 回の読み取りにまとめられることがあります。

    - `headers` {{optional_inline}}
      - : セッションを設定する[拡張 `CONNECT` リクエスト](/ja/docs/Web/HTTP/Reference/Methods/CONNECT#extended_connect)に独自の HTTP リクエストヘッダーを追加するために使用できる、オブジェクトリテラル、配列、または {{domxref("Headers")}} オブジェクトです。
        これにより、認証トークンなどの情報を URL のクエリー文字列ではなく、セッション確立時にリクエストヘッダーとしてサーバーに送信できます。
        デフォルト値は `{}` で、独自のヘッダーは追加されません。

        値の形式は {{domxref("Headers.Headers", "Headers()")}} コンストラクターの `init` 引数と同じです。文字列値を持つオブジェクトリテラル、2 要素の `[name, value]` 配列の配列、または既存の `Headers` オブジェクトを指定します。
        {{httpheader("Cookie")}} などの[禁止リクエストヘッダー](/ja/docs/Glossary/Forbidden_request_header)は、無視されます。
        `WT-Available-Protocols` ヘッダーはこのオプションでは設定できず、代わりに `protocols` の値から設定されます。

        `WT-Protocol` 以外の、サーバーがレスポンスで送信したヘッダーは、セッション確立後に {{domxref("WebTransport.responseHeaders")}} から読み取れます。

    - `protocols` {{optional_inline}}
      - : アプリケーション固有のプロトコル名をそれぞれ示す文字列の配列です。優先度の高い順に並べます。
        デフォルト値は空の配列です。

        サーバーはプロトコルのいずれかを選択して返すことがあります。
        その場合、選択された値は {{domxref("WebTransport/protocol", "protocol")}} プロパティから、{{domxref("WebTransport/ready", "ready")}} プロミスが履行された時点で取得できるようになります。
        サーバーは提示されたプロトコルを選択しないこともあります。その場合、`protocol` は空文字列（`""`）を返します。
        また、サポートするプロトコルがない場合、サーバーは接続を拒否することがあります。その場合、{{domxref("WebTransport/ready","ready")}} はエラーで拒否されます。

    - `requireUnreliable` {{optional_inline}}
      - : 論理値です。
        `true` の場合、HTTP/3 接続を確立できないときに HTTP/2 で接続を確立することはできません。
        デフォルト値は `false` です。
    - `serverCertificateHashes` {{optional_inline}}
      - : サーバー証明書のハッシュ値と、その生成に使用したアルゴリズム名をそれぞれ定義するオブジェクトの配列です。
        このオプションは、専用接続を使用するトランスポート（`allowPooling` が `false`）でのみ対応しています。

        指定すると、ブラウザーは Web 公開鍵基盤（PKI）を使用する代わりに、接続時にサーバーから提示された証明書を指定された証明書ハッシュと照合して認証しようとします。
        いずれかのハッシュが一致した場合、ブラウザーはサーバーが信頼できる証明書を持つと判断し、通常どおり接続します。
        空の場合、ユーザーエージェントは通常の fetch 操作と同じ PKI による証明書検証手順を使用します。

        この機能を使うと、一般に信頼された証明書の取得が通常は難しい WebTransport サーバーにも接続できます。たとえば、パブリックルーティングできないホストや、仮想マシンのような一時的なホストが該当します。

        > [!NOTE]
        > 通常、ウェブアプリケーションは信頼できる仲介者からハッシュを取得します。
        > たとえば、WebTransport サーバーを実行する VM のプロビジョニングにクラウドプロバイダーを利用できます。
        > プロバイダーはサーバーへの信頼されたアクセス権を持ち、その証明書をリクエストしてハッシュを生成し、API（PKI を介したもの）またはクラウドコンソール経由でアプリケーションに提供できます。
        > ウェブアプリケーションは、VM 自体が長期間有効な TLS 証明書を持たなくても、提供されたハッシュを使用して VM 上のサーバーに直接接続できます。

        証明書は有効期間が 2 週間未満の X.509v3 証明書でなければならず、現在時刻がその有効期間内である必要があります。
        証明書内の公開鍵の形式は実装によって異なりますが、少なくとも secp256r1 (NIST P-256) 名前付きグループを使用する ECDSA を含み、RSA 鍵を含んではなりません。
        したがって、ECDSA 鍵は相互運用可能なデフォルトの公開鍵形式です。
        ユーザーエージェントが追加の要件を設ける場合があります。判明していれば、[ブラウザーの互換性](#ブラウザーの互換性)の節に記載されます。

        配列内の各オブジェクトは、次のプロパティを持ちます。
        - `algorithm`
          - : 値が `sha-256`（大文字・小文字を区別しない）の文字列です。
            この文字列はハッシュの検証に使用するアルゴリズムを表します。不明なアルゴリズムを使用したハッシュは無視されます。
            この記事の執筆時点では、仕様書に記載されているハッシュアルゴリズムは `SHA-256` のみです。

        - `value`
          - : ハッシュ値を含む [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)、{{jsxref("TypedArray")}}、または [`DataView`](/ja/docs/Web/JavaScript/Reference/Global_Objects/DataView) です。

### 返値

新しい {{domxref("WebTransport")}} オブジェクトです。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : `serverCertificateHashes` が指定されたものの、トランスポートプロトコルがこの機能に対応していない場合に発生します。
- `SyntaxError`
  - : 指定された `url` が無効な場合、スキームが HTTPS でない場合、または URL にフラグメントが含まれている場合に発生します。
    `protocols` に重複した値、プロトコルトークンで許可されていない文字を含む値、エンコード後の長さが `0` または `512` バイトを超える値が含まれている場合にも発生します。
- {{jsxref("TypeError")}}
  - : 専用接続でない接続（つまり `allowPooling` が `true`）に `serverCertificateHashes` が設定された場合に発生します。
    `anticipatedConcurrentIncomingBidirectionalStreams` または `anticipatedConcurrentIncomingUnidirectionalStreams` が `0` から `65535` の範囲外の場合にも発生します。
    `headers` に 2 要素配列でない項目、無効なヘッダー名または値、大文字・小文字を区別せず `WT-Available-Protocols` という名前のヘッダーが含まれている場合にも発生します。

## 例

### デフォルトオプションで接続

この例では、URL だけを使用して `WebTransport` を構築し、接続を待ってからトランスポートを監視し、閉じたときに報告する方法を示します。

まず、URL を受け取り、それを使って `WebTransport` オブジェクトを構築する `async` メソッドを定義します。
コンストラクターオプションを指定しないため、接続ではデフォルトオプションが使用されます。専用接続であり、信頼性のないトランスポートへの対応は必須ではなく、輻輳制御はデフォルトで、通常の Web PKI によるサーバー認証が行われます。
スキームは HTTPS で、ポート番号を明示する必要があります。

{{domxref("WebTransport.ready")}} プロミスが履行されたら、接続を使用できます。

```js
async function initTransport(url) {
  // トランスポート接続を初期化
  const transport = new WebTransport(url);

  // ready が履行されると接続を使用できる
  await transport.ready;
  return transport;
}
```

{{domxref("WebTransport.closed")}} プロミスが履行されるのを待つことで、接続が閉じられたことに応答できます。
`WebTransport` 操作が返すエラーは {{domxref("WebTransportError")}} 型で、標準の {{domxref("DOMException")}} に加えて追加のデータを含みます。

以下の `closeTransport()` メソッドはその方法を示しています。
`try...catch` ブロック内で `await` を使用して `closed` プロミスが履行または拒否されるのを待ち、接続が意図的に閉じられたのか、エラーが原因で閉じられたのかを報告します。

```js
async function closeTransport(transport) {
  // 接続が閉じられたことに応答
  try {
    await transport.closed;
    console.log(`HTTP/3 による ${url} への接続は正常に終了しました。`);
  } catch (error) {
    console.error(
      `HTTP/3 による ${url} への接続は ${error} が原因で終了しました。`,
    );
  }
}
```

上記の非同期関数は、次のように別の非同期関数内で呼び出すことができます。

```js
// トランスポートを使用
async function useTransport(url) {
  const transport = await initTransport(url);

  // トランスポートオブジェクトを使用してデータを送受信
  // …

  // 完了したらトランスポートを閉じる
  await closeTransport(transport);
}

const url = "https://example.com:4999/wt";
useTransport(url);
```

### サーバー証明書ハッシュを使用して接続

以下の例は、`serverCertificateHashes` オプションを指定して `WebTransport` を構築するコードです。
この場合、配列には SHA-256 アルゴリズムでエンコードされたハッシュが 2 つ含まれています。
`allowPooling` オプションは `false`（デフォルト値）でなければならないことに注意してください。

各ハッシュの `value` には、`ArrayBuffer`、`TypedArray`（たとえば `Uint8Array`）、または `DataView` を指定できます。以下の例では、それぞれの SHA-256 ハッシュ値を `Uint8Array` で表します。たとえば、16 進文字列 `5a1559...` は、バイト値 `0x5a`、`0x15`、`0x59` などに対応します。

```js
const transport = new WebTransport(url, {
  serverCertificateHashes: [
    {
      // 5a155927eba7996228455e4721e6fe5f739ae15db6915d765e5db302b4f8a274
      algorithm: "sha-256",
      value: new Uint8Array([
        0x5a, 0x15, 0x59, 0x27, 0xeb, 0xa7, 0x99, 0x62, 0x28, 0x45, 0x5e, 0x47,
        0x21, 0xe6, 0xfe, 0x5f, 0x73, 0x9a, 0xe1, 0x5d, 0xb6, 0x91, 0x5d, 0x76,
        0x5e, 0x5d, 0xb3, 0x02, 0xb4, 0xf8, 0xa2, 0x74,
      ]),
    },
    {
      // 7d7094e7a8d3097feff3b5ee84fa5cab58e4de78f38bcfdee5ea8b51f4bfa8fd
      algorithm: "sha-256",
      value: new Uint8Array([
        0x7d, 0x70, 0x94, 0xe7, 0xa8, 0xd3, 0x09, 0x7f, 0xef, 0xf3, 0xb5, 0xee,
        0x84, 0xfa, 0x5c, 0xab, 0x58, 0xe4, 0xde, 0x78, 0xf3, 0x8b, 0xcf, 0xde,
        0xe5, 0xea, 0x8b, 0x51, 0xf4, 0xbf, 0xa8, 0xfd,
      ]),
    },
  ],
});
```

### BYOB リーダーでデータグラムを読み取る

この例では、{{domxref("ReadableStreamBYOBReader")}} を使用して、受信したデータグラムを指定したバッファーに読み込む方法を示します。

まず、`datagramsReadableType` オプションに `bytes` を設定して `WebTransport` を構築し、トランスポートの {{domxref("WebTransportDatagramDuplexStream.readable", "datagrams.readable")}} プロパティが読み取り可能なバイトストリームを返すようにします。
次に、{{domxref("ReadableStream.getReader()", "getReader()")}} に `mode: "byob"` を渡して、BYOB（"bring your own buffer"、独自のバッファーを使用）リーダーを取得します。

任意のデータグラムを保持できるサイズの 64 KiB バッファーを確保します（[`datagramsReadableType`](#datagramsreadabletype) オプションを参照）。
{{domxref("ReadableStreamBYOBReader.read()", "read()")}} を呼び出すたびに、このバッファーのビューに 1 つのデータグラムが読み込まれます。
返される `value` は、データグラムのサイズに合わせた、同じメモリー上の新しい `Uint8Array` です。
ビューを `read()` に渡すとそのバッファーが転送されるため、元のビューは使用できなくなります。
代わりに、`value` からバッファーを取り出して次の読み取りに再利用します。

```js
const transport = new WebTransport(url, { datagramsReadableType: "bytes" });
await transport.ready;

const reader = transport.datagrams.readable.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(65536);

while (true) {
  const { value, done } = await reader.read(new Uint8Array(buffer));
  if (done) {
    break;
  }
  // value は 1 つのデータグラムを含む Uint8Array
  console.log(`データグラムを受信しました（${value.byteLength} バイト）。`);
  buffer = value.buffer;
}
```

### 独自のリクエストヘッダーを設定

この例では、`headers` オプションを使用してセッションを設定するリクエストに独自のヘッダーを追加する 3 つの方法を示します。

まず、プロパティ名をヘッダー名、値をヘッダー値とするオブジェクトリテラルを渡します。

```js
const transport = new WebTransport(url, {
  headers: {
    Authorization: "Bearer abc123",
    "X-Client-Version": "2.4.1",
  },
});
```

2 要素の `[name, value]` 配列の配列を渡すこともできます。

```js
const transport = new WebTransport(url, {
  headers: [
    ["Authorization", "Bearer abc123"],
    ["X-Client-Version", "2.4.1"],
  ],
});
```

{{domxref("Headers")}} オブジェクトを渡すこともできます。

```js
const headers = new Headers();
headers.append("Authorization", "Bearer abc123");
headers.append("X-Client-Version", "2.4.1");

const transport = new WebTransport(url, { headers });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)<sup>(英語)</sup>
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "ストリーム API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)<sup>(英語)</sup>
