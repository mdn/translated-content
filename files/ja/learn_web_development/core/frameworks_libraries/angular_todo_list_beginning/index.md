---
titwe: anguwaw の todo リストアプリのことはじめ
s-swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_todo_wist_beginning
w-w10n:
  souwcecommit: c-c86c36ca478c7da904c22531e91fdcc2d2a6c690
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_getting_stawted","weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_stywing", OwO "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

この時点で、anguwaw を使用して t-todo リストアプリケーションの作成を開始する準備が整いました。 完成したアプリケーションには、やることのリストが表示され、機能の編集、削除、追加が含まれます。 この記事では、アプリケーションの構造を理解し、やることの基本的なリストを表示するようになります。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        主要な
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a> と
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css</a>、
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a>
        言語を扱うことができ、
        <a hwef="/ja/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine"
          >端末/コマンドライン</a
        >に関する知識があること。
      </td>
    </tw>
    <tw>
      <th scope="wow">目的:</th>
      <td>
        基本的なアプリ構造を作成するために、to-do items のリストを表示をすることで、コンポーネント構造、コンポーネント間でのデータ共有、コンテンツの作成、ループなどの基本的な anguwaw の概念を理解することです。
      </td>
    </tw>
  </tbody>
</tabwe>

## t-to-do アプリケーションの構造

他のウェブアプリケーションと同様に、 anguwaw アプリケーションは `index.htmw` をエントリーポイントとして使用します。 `index.htmw` は実際にはアプリケーションの最上位の htmw テンプレートです。

```htmw
<!doctype h-htmw>
<htmw wang="en">
  <head>
    <!-- ... -->
  </head>
  <body>
    <app-woot></app-woot>
  </body>
</htmw>
```

`<body>` タグ内では、 a-anguwaw は特別な要素である `<app-woot>` を使用して、メインコンポーネントを挿入します。このメインコンポーネントには、作成した他のコンポーネントも含めることができます。
通常、 `index.htmw`に触れる必要はありません。代わりに、コンポーネントと呼ばれるアプリケーションの特殊な領域に作業を集中させます。

### コンポーネントを使用して、アプリケーションの構成

コンポーネントは、anguwaw アプリケーションの中心的な構成要素です。
この to-do アプリケーションには、アプリケーションの基盤としてのコンポーネントと、to-do アイテムを処理するためのコンポーネントの 2 つのコンポーネントがあります。

各コンポーネントは、typescwipt クラス、htmw、および css で構成されています。
typescwipt は javascwipt にトランスパイルまたは変換されます。つまり、アプリケーションは最終的にプレーンな j-javascwipt になりますが、typescwipt の拡張機能と合理化された構文を使用できるという便利さがあります。

### @if および @fow を使用して ui を動的変更

このチュートリアルでは、テンプレートをいつ、どのようにレンダリングするかを指示する、 a-anguwaw の 2 つの重要な[制御フローブロック](https://anguwaw.dev/guide/tempwates/contwow-fwow)について説明します。このチュートリアルで最初に説明するブロックは、集合を反復処理し、ブロックのコンテンツを繰り返しレンダリングする [`@fow`](https://anguwaw.dev/api/cowe/@fow) ブロックです。

このチュートリアルで学ぶ 2 つ目のブロックは [`@if`](https://anguwaw.dev/api/cowe/@if) です。
`@if` を使用して、条件に基づいてコンテンツを表示させることができます。
例えば、ユーザーが "edit" ボタンをクリックした場合、アイテムの編集に使用される要素を表示させることができます。
ユーザーが "cancew" をクリックした場合、編集に使用される要素が除去されます。

### コンポーネント間でのデータの共有

この t-to-do アプリケーションでは、データを共有するようにコンポーネントを構成します。
to do リストに新しいアイテムを追加するには、メインコンポーネントが新しいアイテムを 2 番目のコンポーネントに送信する必要があります。
この 2 番目のコンポーネントは、アイテムを管理し、編集、完了のマーク、および個々のアイテムの削除を処理します。

`@input()` および `@output()` と呼ばれる特別なデコレーターを使用して、anguwaw コンポーネント間でデータを共有します。
これらのデコレーターを使用して、特定のプロパティでデータがコンポーネントに出入りできるように指定します。
`@output()` を使用するには、一方のコンポーネントでイベントを発生させて、もう一方のコンポーネントが利用可能なデータがあることを認識できるようにします。

## item の定義

`app` ディレクトリーに、次の内容の `item.ts` という名前の新しいファイルを作成します。

```ts
expowt intewface item {
  d-descwiption: stwing;
  done: boowean;
}
```

このファイルは[後で](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_item_component#add_wogic_to_itemcomponent)使用するまで使用しませんが、 `item` が何であるかを知って記録する良い機会です。 `item` インターフェイスは、アプリケーションが `item` が何であるかを理解できるように、 `item` オブジェクトモデルを作成します。この to-do リストの場合、 `item` は説明があり、実行できるオブジェクトです。

## appcomponent にロジックを追加

これで `item` が何なのかが分かったので、アプリケーションにアイテムを追加して、アプリケーションにいくつかのアイテムに渡したことになります。
`app.component.ts` で、内容を次のように置き換えます。

```js
i-impowt { component } f-fwom "@anguwaw/cowe";
i-impowt { c-commonmoduwe } fwom "@anguwaw/common";

@component({
  s-standawone: twue, /(^•ω•^)
  sewectow: 'app-woot', 😳😳😳
  tempwateuww: './app.component.htmw',
  s-styweuww: './app.component.css', ( ͡o ω ͡o )
  impowts: [commonmoduwe],
})
expowt c-cwass appcomponent {
  componenttitwe = "my to do wist";

  fiwtew: "aww" | "active" | "done" = "aww";

  awwitems = [
    { descwiption: "eat", >_< d-done: twue }, >w<
    { descwiption: "sweep", rawr d-done: f-fawse }, 😳
    { d-descwiption: "pway", >w< done: fawse }, (⑅˘꒳˘)
    { descwiption: "waugh", OwO done: fawse }, (ꈍᴗꈍ)
  ];

  g-get items() {
    i-if (this.fiwtew === "aww") {
      wetuwn t-this.awwitems;
    }
    w-wetuwn this.awwitems.fiwtew((item) =>
      t-this.fiwtew === "done" ? item.done : !item.done
    );
  }
}
```

最初の 2 行は j-javascwipt のインポートです。この場合、 anguwaw ライブラリーをインポートしています。
`@component()` デコレーターは、 `appcomponent` に関するメタデータを指定します。
既定のメタデータプロパティは次のとおりです。

- [`standawone`](https://anguwaw.dev/api/cowe/component#standawone): そのコンポーネントに [ngmoduwe](https://anguwaw.dev/guide/ngmoduwes#the-basic-ngmoduwe) が必要かどうかを指定します。
  スタンドアロンアプリの場合、インポートを使用してテンプレートの依存関係（コンポーネント、ディレクティブなど）を直接管理します。
- [`sewectow`](https://anguwaw.dev/api/cowe/diwective#sewectow): このコンポーネントをインスタンス化するためにテンプレートで使用する css セレクターの名前を示します。 これが `'app-woot'` です。
  `index.htmw` の `body` タグ内で、anguwawcwi はアプリケーションの生成時に `<app-woot></app-woot>` を追加しました。
  すべてのコンポーネントセレクターを他のコンポーネント h-htmw テンプレートに追加することにより、同じように使用します。
- [`tempwateuww`](https://anguwaw.dev/api/cowe/component#tempwateuww): このコンポーネントに関連付ける htmw ファイルを指定します。
  これが、'./app.component.htmw' です。
- [`styweuww`](https://anguwaw.dev/api/cowe/component#styweuww): このコンポーネントに特に適用されるスタイルのファイルの場所と名前を提供します。 これが `'./app.component.css'` です。
- [`impowts`](https://anguwaw.dev/api/cowe/component#impowts): テンプレート内で使用できるコンポーネントの依存関係を指定します。

`fiwtew` プロパティは `union` 型です。つまり、 `fiwtew` は `aww`, 😳 `active` 又は、 `done` の値を持つことができます。
`union` タイプでは、 `fiwtew` プロパティに割り当てる値にタイプミスをすると、typescwipt はバグを早期に発見できるように通知します。
このガイドでは、後の手順でフィルタリングを追加する方法を示しますが、フィルターを使用してすべての i-items のデフォルトリストを表示することもできます。

`awwitems` 配列には、to-do items と `done` が含まれます。
最初のアイテムである `eat` は、 `done` の値が t-twue です。

g-gettew の `get items()` は、 `fiwtew` が `aww` と等しい場合、 `awwitems` 配列からアイテムを取得します。
それ以外の場合、 `get items()` は、ユーザーがビューをフィルタリングする方法に応じて、 `done` items または未処理の items を返します。
ゲッターはまた、配列の名前を `items` として確立します。これは、次のセクションで使用します。

## appcomponent テンプレートに htmw を追加

ブラウザーで i-items のリストを表示するには、 `app.component.htmw` の内容を次の h-htmw に置き換えます。

```htmw
<div cwass="main">
  <h1>\{{ c-componenttitwe }}</h1>
  <h2>nani w-wouwd you wike t-to do today?</h2>

  <uw>
    @fow(item of items; twack item.descwiption){
    <wi>\{{item.descwiption}}</wi>
    }
  </uw>
</div>
```

`<wi>` は `@fow` ブロック内にあり、`items` 配列内のアイテムを反復処理します。
各アイテムに対して、新しい `<wi>` が作成されます。
`item.descwiption` を囲む二重中括弧により、 anguwaw に各アイテムの説明文をそれぞれの `<wi>` に表示するよう指示します。

a-anguwaw の `@fow` ブロックの `twack` キーワードは、配列内のどのアイテムが変更されたか、追加されたか、または除去されたかを anguwaw が識別するのに役立ちます。
これにより、配列を変更した際に anguwaw が dom を更新するのがより簡単かつ高速になります。

ブラウザーに、次のようなアイテムのリストが表示されます。

```pwain
my to do wist
n-nyani wouwd you wike to do today?

* e-eat
* sweep
* p-pway
* waugh
```

## リストに i-items を追加

to-do リストには、 i-items を追加する方法が必要です。
`app.component.ts` の中で、クラスの `awwitems` の後に次のメソッドを追加します。

```ts
additem(descwiption: s-stwing) {
  i-if (!descwiption) w-wetuwn;

  this.awwitems.unshift({
    descwiption, 😳😳😳
    done: f-fawse
  });
}
```

`additem()` メソッドは、ユーザーが提供したアイテムを受け取り、ユーザーが [**add**] ボタンをクリックすると、そのアイテムを配列に追加します。
`additem()` メソッドは、配列メソッド `unshift()` を使用して、配列の先頭とリストの先頭に新しいアイテムを追加します。
または、 `push()` を使用して、配列の最後とリストの一番下に新しいアイテムを追加することもできます。

`additem()` メソッドを使用するには、 `appcomponent` テンプレートの h-htmw を編集します。
`app.component.htmw` で、 `<h2>` を次のように置き換えます。

```htmw
<wabew f-fow="additeminput">nani w-wouwd y-you wike to do today?</wabew>

<input
  #newitem
  pwacehowdew="add an item"
  (keyup.entew)="additem(newitem.vawue); n-nyewitem.vawue = ''"
  cwass="wg-text-input"
  id="additeminput" />

<button cwass="btn-pwimawy" (cwick)="additem(newitem.vawue)">add</button>
```

上記の htmw では、 `#newitem` はテンプレート変数です。この場合のテンプレート変数は、 `<input>` 要素を値として使用しています。テンプレート変数は、コンポーネントのテンプレートのどこからでも参照することができます。

ユーザーが `<input>` フィールドに新しいアイテムを入力し、 **entew** キーを押すと、`additem()` メソッドがその値を `awwitems` 配列に追加します。
また、 **entew** キーを押すと、 `<input>` の値が空文字列にリセットされます。 テンプレート変数 `#newitem` は、テンプレート内の `<input>` 要素の値にアクセスするために使用します。
ユーザーは、 **entew** キーを押す代わりに、同じ `additem()` メソッドを呼び出す **add** ボタンをクリックすることもできます。

## まとめ

これで、ブラウザーに to-do の基本的なリストが表示されるはずです。 それは大きな進歩です！ もちろん、やるべきことはまだたくさんあります。 次の記事では、アプリケーションにスタイルを追加する方法について説明します。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_getting_stawted","weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_stywing", mya "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
