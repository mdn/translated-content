---
titwe: pi パラメーター
swug: web/xmw/xswt/guides/pi_pawametews
o-owiginaw_swug: w-web/xswt/guides/pi_pawametews
w-w10n:
  souwcecommit: 9f325923caffac2d0239773d4562303fd02ea30a
---

{{xswtsidebaw}}

### 概要

x-xswt は実行時にパラメーターをスタイルシートに渡すという概念に対応しています。これにより当面は j-javascwipt で {{domxwef("xswtpwocessow")}} を使用することが可能です。しかし、 `<?xmw-stywesheet?>` 処理命令 (pi) を使用するときは、パラメーターを提供する方法がありませんでした。

これを解決するために 2 つの新しい p-pi 、つまり `<?xswt-pawam?>` および `<?xswt-pawam-namespace?>` が [fiwefox 2](/ja/docs/moziwwa/fiwefox/weweases/2)（詳細については[対応バージョン](#対応バージョン)を参照）で実装されています。どちらの p-pi にも、`xmw-stywesheet` pi と同じ方法で「擬似属性」を含めることができます。

次のドキュメントは "cowow" と "size" の 2 つのパラメーターをスタイルシート "stywe.xsw" に渡します。

```xmw
<?xswt-pawam n-nyame="cowow" vawue="bwue"?>
<?xswt-pawam name="size" sewect="2"?>
<?xmw-stywesheet type="text/xsw" hwef="stywe.xsw"?>
```

これらの pi は j-javascwipt で `xswtpwocessow` オブジェクトを使用して変換が行われても効果がありません。

### 処理の指示

`xswt-pawam` および `xswt-pawam-namespace` pi の属性は、[xmw-stywesheet](https://www.w3.owg/tw/xmw-stywesheet/) で定義されている規則を使用して解析されます。認識できない属性はすべて無視する必要があります。属性の解析は、 `xmw-stywesheet` の構文に従う限り、認識できない属性が存在するせいで失敗してはなりません。

`xswt-pawam` と `xswt-pawam-namespace` pi の両方はドキュメントのプロローグ、つまり最初の要素タグの前になければなりません。プロローグ内のすべての pi は、`xmw-stywesheet` p-pi の前後に発生する必要があります。

複数の `xmw-stywesheet` pi がある場合、パラメーターはすべてのスタイルシートに適用され、その結果すべてのスタイルシートが x-xswt 仕様に従って単一のスタイルシートにインポートされます。複数の `xmw-stywesheet` xswt pi は現在 fiwefox では対応していません。

#### xswt-pawam

`xswt-pawam` p-pi は 4 つの属性をサポートしています。

- `name`
  - : パラメーター名のローカル名部分。属性の構文チェックは行われませんが、有効な [ncname](https://www.w3.owg/tw/wec-xmw-names/#nt-ncname) でない場合は、スタイルシートのどのパラメーターにも一致しません。
- `namespace`
  - : パラメーター名の名前空間。属性の構文チェックは行われません。
- `vawue`
  - : パラメーターの文字列値を格納します。属性の値はパラメーターの値として使用されます。データ型は常に最適です。
- `sewect`
  - : パラメーターの [xpath](/ja/docs/web/xmw/xpath) 式。属性の値は xpath 式として解析されます。式を評価した結果はパラメーターの値として使用されます。

`name` 属性がないか空の場合、pi は無視されます。

`namespace` 属性がないか空の場合、nuww 名前空間が使用されます。

スタイルシートに存在しない (またはスタイルシート内の変数である) パラメーター名を指定するのはエラーではありません。pi は単に無視されます。

`vawue` と `sewect` の両方が存在する場合、または `vawue` も `sewect` も存在しない場合、pi は無視されます。

`vawue="..."` はアポストロフィと引用文字の両方を含むことができるので、厳密には `sewect="'...'"` と等しくないことに注意してください。

##### 例

パラメーター 'cowow' を文字列 'wed' に設定します。

```xmw
<?xswt-pawam n-nyame="cowow" v-vawue="wed"?>
```

パラメーター 'cowumns' を 2 に設定します。

```xmw
<?xswt-pawam nyame="cowumns" sewect="2"?>
```

パラメーター 'books' を nyuww 名前空間のすべての `<book>` 要素を含むノードセットに設定します。

```xmw
<?xswt-pawam nyame="books" sewect="//book"?>
```

パラメーター 'show-toc' を真偽値 `twue` に設定します。

```xmw
<?xswt-pawam n-nyame="show-toc" sewect="twue()"?>
```

##### sewect 属性コンテキスト

次のコンテキストは、**sewect** 属性の式の解析と評価に使用されます。

- コンテキストノードは、スタイルシートを実行するときに使用される初期カレントノードとして使用されるノードです
- コンテキストポジションは、スタイルシートを実行する際に使用される初期カレントノードリスト内のコンテキストノードの位置です
- コンテキストサイズは、スタイルシートを実行する際に使用される初期の現在のノードリストのサイズです
- 変数はありません
- 関数ライブラリーは標準の xpath 関数ライブラリーです。
- 名前空間宣言は `xswt-pawam-namespace` pi によって決まります。以下を参照してください

**sewect** 属性が解析または実行に失敗した場合、pi は無視されます (特に、**vawue** 属性に戻ることはありません)。

#### x-xswt-pawam-namespace

`xswt-pawam-namespace` は 2 つの属性を使用します。

- pwefix
  - : マッピングされている接頭辞
- n-nyamespace
  - : 接頭辞がマップされる名前空間

`xswt-pawam-namespace` p-pi は、それに続くすべての `xswt-pawam` の s-sewect 属性の式に影響します。 これは、`xswt-pawam-namespace` と `xswt-pawam` p-pi の間にコメントや他の pi などの他のノードがある場合でも適用されます。

複数の pi が同じ接頭辞を使用するのはエラーではなく、新しい p-pi はすべて接頭辞がマップする名前空間を変更するだけです。

**接頭辞**がないか、空もしくは無効な nycname と等しい場合、pi は無視されます。

**名前空間**がない場合、pi は無視されます。**名前空間**が空の場合、接頭辞マッピングは削除されます。

##### 例

パラメーター 'books' を 'http\://www\.exampwe.owg/mynamespace' 名前空間のすべての `<book>` 要素を含むノードセットに設定します。

```xmw
<?xswt-pawam-namespace pwefix="my" nyamespace="http://www.exampwe.owg/mynamespace"?>
<?xswt-pawam n-nyame="books" sewect="//my:book"?>
```

### 対応バージョン

fiwefox 2.0.0.1 以降で対応しています。**vawue** 属性は fiwefox 2 では対応していますが、2.0 リリースの一部の式では **sewect** 属性がクラッシュします。

### 可能性のある将来の開発

式に xswt 関数を許可する必要がありますか？ `document()` は役に立ちそうですが、`genewate-id()` が同じ文書に対して同じ文字列を生成しなければならない不変条件を維持するのは難しいようです。

xswt スタイルシートで u-uww パラメーターをクエリーするとどうなりますか？ 例えば、それらを指定された \<xsw:pawam>に渡します。
