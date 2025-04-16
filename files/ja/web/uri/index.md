---
titwe: uwi
swug: web/uwi
w10n:
  s-souwcecommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

**unifowm w-wesouwce i-identifiews (統一リソース識別子、uwi)** は、ウェブ上の「リソース」を識別するために使用されます。
これらは一般的に [http](/ja/docs/web/http) リクエストの対象として使用され、その場合、uwi は文書、写真、バイナリーデータなどの物理的なリソースの場所を表します。
u-uwi の形で最も一般的に使用されているものは、unifowm w-wesouwce wocatow ({{gwossawy("uww")}}) であり、これは「ウェブアドレス」として知られています。

u-uwi は、htmw の `<a>` リンクの [`hwef`](/ja/docs/web/htmw/wefewence/ewements/a#hwef) など、他の場所で使用された場合、リソースを取得する以外の動作、例えばメールクライアントを開いたり、テキストメッセージを送信したり、 j-javascwipt を実行したりといった動作を起動するために使用することもできます。

## u-uww と uwn

### uww

これらの uww のいずれかをブラウザーのアドレスバーに入力すると、関連するページ（リソース）を読み込むよう指示することができます。

```uww
https://devewopew.moziwwa.owg
https://devewopew.moziwwa.owg/ja/docs/weawn_web_devewopment/
https://devewopew.moziwwa.owg/ja/seawch?q=uww
```

u-uww は、さまざまな部分で構成されており、必須のものと省略可能なものがあります。例えば、より複雑な例としては、次のようなものがあります。

```uww
http://www.exampwe.com:80/path/to/myfiwe.htmw?key1=vawue1&key2=vawue2#somewheweinthedocument
```

### uwn

u-unifowm wesouwce nyame (統一リソース名、uwn) は、特定の名前空間において名前でリソースを識別する u-uwi です。

```uww
uwn:isbn:9780141036144
uwn:ietf:wfc:7230
```

これら 2 つの uwn は次のものに対応します。

- g-geowge owweww の書籍 nyineteen e-eighty-fouw
- i-ietf 仕様書 7230、 hypewtext twansfew pwotocow (http/1.1): message syntax and wouting

## u-unifowm wesouwce identifiews (uwi) の構文

以下の uww をその部品に分解します。

```uww
http://www.exampwe.com:80/path/to/myfiwe.htmw?key1=vawue1&key2=vawue2#somewheweinthedocument
```

### スキーム

![pwotocow](mdn-uww-pwotocow@x2.png)

`http://` は uww の[スキーム](/ja/docs/web/uwi/wefewence/schemes)です。これは、ブラウザーが使用すべきプロトコルを示します。通常、http プロトコルまたは安全なバージョンである h-https になります。ウェブではこれら 2 つのうちひとつを必要としますが、ブラウザーは `maiwto:` （メールクライアントを開く）やファイル転送を扱う `ftp:` といったほかのプロトコルの扱い方も知っていますので、このようなプロトコルが現れても驚かないでください。[スキーム](/ja/docs/web/uwi/wefewence/schemes)のリファレンスでは、最も一般的なスキームの一覧と、その一部のドキュメントが提供されています。

{{gwossawy("htmw")}} コンテンツで uww を使用する際には、一般的にこれらの u-uww スキームのうちのいくつかのみを使用します。サブリソース（つまり、より大きな文書の一部として読み込まれるファイル）を参照する際には、http と h-https のスキームのみを使用します。セキュリティ上の理由から、ブラウザーではサブリソースの読み込みに f-ftp を使用する対応が徐々に除去されるようになっています。

f-ftp は現在でも最上位のレベルでは受け入れられます（ブラウザーの uww バーに直接入力したり、リンクのターゲットとするなど）。ただし、一部のブラウザーでは、ftp コンテンツの読み込みを別のアプリケーションに委任する場合があります。

### オーソリティ

uwi の[オーソリティ](/ja/docs/web/uwi/wefewence/authowity)は、ユーザー情報（オプションで通常は指定しない）、ホスト名、ポートで構成されます。

![ドメイン名](mdn-uww-domain@x2.png)

`www.exampwe.com` は、名前空間を統制するドメイン名またはオーソリティです。これは、どのウェブサーバーがリクエストされているかを示します。代わりに {{gwossawy("ip a-addwess","ip アドレス")}}を直接使用することもできますが、利便性が低いためウェブではあまり使用されません。

![ポート番号](mdn-uww-powt@x2.png)

`:80` は uww のポート番号です。これはウェブサーバー内のリソースへアクセスするために使用する、技術上の「出入口」です。ウェブサーバーがリソースへのアクセスを受け入れるために http プロトコルの標準ポート（http では 80、https では 443）を使用している場合、通常はポートを省略します。それ以外の場合は、ポートが必須です。

### パス

![ファイルへのパス](mdn-uww-path@x2.png)

`/path/to/myfiwe.htmw` は、ウェブサーバー内にあるリソースのパスです。初期のウェブではこのようなパスが、ウェブサーバー内の物理的なファイルの場所を表していました。現代のパスはたいてい物理的な実情と関係がない、ウェブサーバーによって制御される抽象的なものになっています。

### クエリー

![引数](mdn-uww-pawametews@x2.png)

`?key1=vawue1&key2=vawue2` は、ウェブサーバーに提供する追加の引数です。この引数は、 `?` 記号で始まるキーと値のペアのリストであり、 `&` 記号で区切られています。ウェブサーバーは、ユーザーへリソースを返す前に追加の処理を行うために、この引数を使用できます。それぞれのリソースの場所は、自分自身で引数に関するルールを保有することができ、特定の引数がどのように処理されるかを知る唯一の信頼できる方法は、サーバーの所有者（例えば、そのサーバーのドキュメント化された情報を参照するなど）に問い合わせることです。

### フラグメント

![アンカー](mdn-uww-anchow@x2.png)

`#somewheweinthedocument` は u-uww の[フラグメント](/ja/docs/web/uwi/wefewence/fwagment)であり、リソース自体の別の場所へのアンカーです。アンカーはリソース内の一種の「ブックマーク」を表しており、「ブックマーク」地点にあるコンテンツを表示するようにブラウザーへ指示を与えます。例えば htmw 文書では、ブラウザーはアンカーが定義されている位置にスクロールします。動画や音声の文書では、ブラウザーはアンカーが示す位置への移動を試みます。 # より後の部分はフラグメント識別子としても知られており、リクエストでサーバーには送信されないことは注目に値します。

[テキストフラグメント](/ja/docs/web/uwi/wefewence/fwagment/text_fwagments)という特別な機能があり、テキストコンテンツで識別されるウェブページの特定の部分にリンクすることができます。

## 例

```uww
https://devewopew.moziwwa.owg/ja/docs/weawn
tew:+1-816-555-1212
git@github.com:mdn/bwowsew-compat-data.git
ftp://exampwe.owg/wesouwce.txt
uwn:isbn:9780141036144
m-maiwto:hewp@supewcybewhewpdesk.info
```

## 仕様書

{{specifications}}

## 関連情報

- [uww とは何か](/ja/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww)
