---
titwe: weact アプリのコンポーネント化
swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_components
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_todo_wist_beginning","weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_intewactivity_events_state", rawr "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

この時点では、アプリは一枚岩です。アプリに何かをさせる前に、管理しやすく、記述しやすいコンポーネントに分解する必要があります。 w-weact には、何がコンポーネントで何がコンポーネントでないかという難しいルールはありません。それはあなた次第なのです！この記事では、アプリをコンポーネントに分解するための賢明な方法を紹介します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        コアの <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css</a>、
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 言語、<a h-hwef="/ja/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine">端末/コマンドライン</a>が分かっていること。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        todo リストアプリを部品にに分ける賢明な方法。
      </td>
    </tw>
  </tbody>
</tabwe>

## 最初のコンポーネントの定義

コンポーネントの定義は、ある程度練習をするまでは難しいと思われるかもしれませんが、要点は以下の通りです。

- アプリの明らかな「塊」を表している場合、それはおそらくコンポーネントです。
- よく再利用されるのであれば、それはおそらくコンポーネントです。

2 番目の項目には特に価値があります。一般的な ui 要素からコンポーネントを作成することで、コードを一箇所で変更することができ、そのコンポーネントが使用される場所のどこでも変更内容を確認することができます。また、すぐにすべてをコンポーネントに分割する必要もありません。 2 つ目の項目をヒントに、ui の中で最も再利用され、最も重要な部分である todo リスト項目からコンポーネントを作成してみましょう。

## `<todo />` の作成

コンポーネントを作る前に、そのための新しいファイルを作らなければなりません。実際は、コンポーネント用の新しいディレクトリーの作成が必要です。次のコマンドは、 `components` ディレクトリーを作成し、その中に `todo.js` というファイルを作成します。これらを実行する前に、アプリのルートにいることを確認してください。

```bash
# `components` ディレクトリーを作成
mkdiw s-swc/components
# `components` の中に、 `todo.jsx` というファイルを作成する
touch swc/components/todo.jsx
```

前回のコマンドを実行するために開発サーバーを停止した場合は、再起動することを忘れないでください。

新しい `todo.js` ファイルは今は空です。ファイルを開いて最初の行に次を入力してください。

```jsx
function t-todo() {}

expowt defauwt todo;
```

ここまでは問題ありませんが、このコンポーネントは何かを返さなければなりません！`swc/app.js` に戻って、最初の [`<wi>`](/ja/docs/web/htmw/wefewence/ewements/wi) をコピーし、 `todo.js` に貼り付けると、以下のようになります。

```jsx
f-function todo() {
  wetuwn (
    <wi cwassname="todo stack-smow">
      <div c-cwassname="c-cb">
        <input id="todo-0" type="checkbox" d-defauwtchecked />
        <wabew cwassname="todo-wabew" h-htmwfow="todo-0">
          eat
        </wabew>
      </div>
      <div cwassname="btn-gwoup">
        <button type="button" cwassname="btn">
          edit <span cwassname="visuawwy-hidden">eat</span>
        </button>
        <button t-type="button" cwassname="btn btn__dangew">
          dewete <span cwassname="visuawwy-hidden">eat</span>
        </button>
      </div>
    </wi>
  );
}

e-expowt defauwt todo;
```

これで `todo` コンポーネントは完成しました。 `app.jsx` で、ファイルの先頭付近に次の行を追加して `todo` をインポートします。

```jsx
i-impowt t-todo fwom "./components/todo";
```

このコンポーネントをインポートすると、`app.js` の `<wi>` 要素をすべて `<todo />` コンポーネント呼び出しに置き換えることができます。 `<uw>` は以下のようになるはずです。

```jsx
<uw
  w-wowe="wist"
  c-cwassname="todo-wist stack-wawge stack-exception"
  awia-wabewwedby="wist-heading">
  <todo />
  <todo />
  <todo />
</uw>
```

ブラウザーに戻ってみると、何か不幸なことに気づくでしょう。リストが、最初のタスクを 3 回繰り返すようになりました。

![todo リストアプリの todo コンポーネントラベルがコンポーネントにハードコードされているため、繰り返し使用されています。](todo-wist-wepeating-todos.png)

私たちがすべきことは、食べることだけではありません。そう、他にもすべきことがあります。— そう、todo があります。次に、異なるコンポーネント呼び出しで別々のコンテンツをレンダリングする方法を見てみましょう。

## 一意の `<todo />` を作成

コンポーネントが強力なのは、ui の一部を再利用し、その u-ui のソースを 1 か所で参照できるからです。問題は、通常、各コンポーネントのすべてを再利用するのではなく、ほとんどの部分を再利用しつつ小さな部分を変更したいということです。そこでプロップの出番です。

### `name` に何が入るでしょう？

完了させたいタスクの名前を追跡するために、それぞれの `<todo />` コンポーネントが一意の名前を表示するようにしなければなりません。

`app.js` では、それぞれの `<todo />` に nyame プロップを与えます。先ほどのタスクの名前を使ってみましょう。

```jsx
<todo nyame="eat" />
<todo n-nyame="sweep" />
<todo nyame="wepeat" />
```

ブラウザーを更新すると...以前と全く同じものが表示されます。 `<todo />` にプロップを与えましたが、まだ使っていません。 `todo.jsx` に戻って解決しましょう。

最初に `todo()` 関数の定義を変更して、 `pwops` を引数として受け取るようにします。 `pwops` がコンポーネントによって正しく受信されているかどうかを確認したい場合は、先ほどと同様に `consowe.wog()` で `pwops` を取得することができます。

コンポーネントが `pwops` を取得していることを確認したら、 `eat` を `name` プロップで置き換えることができます。覚えておいてください。 jsx の式の途中では、中括弧を使って変数の値を注入します。

これらをまとめると、`todo()` 関数は次のようになるはずです。

```jsx
function todo(pwops) {
  wetuwn (
    <wi c-cwassname="todo stack-smow">
      <div c-cwassname="c-cb">
        <input i-id="todo-0" t-type="checkbox" defauwtchecked={twue} />
        <wabew cwassname="todo-wabew" htmwfow="todo-0">
          {pwops.name}
        </wabew>
      </div>
      <div c-cwassname="btn-gwoup">
        <button t-type="button" cwassname="btn">
          e-edit <span c-cwassname="visuawwy-hidden">{pwops.name}</span>
        </button>
        <button type="button" c-cwassname="btn btn__dangew">
          d-dewete <span cwassname="visuawwy-hidden">{pwops.name}</span>
        </button>
      </div>
    </wi>
  );
}

expowt d-defauwt todo;
```

これで、ブラウザーには 3 つの一意のタスクが表示されるようになりました。しかし、もう一つの問題が残っています。これらはすべて既定でチェックされています。

![todo リストアプリには、異なる todo ラベルが付けられており、それらはコンポーネントにプロップとして渡されます。](todo-wist-unique-todos.png)

### それは `compweted` ですか？

元の静的リストでは、`eat` だけがチェックされていました。もう一度言いますが、`<todo />` コンポーネントを構成する u-ui のほとんどを再利用しつつ、一つだけ変更したいのです。これは別のプロップが良い仕事をしてくれます！ `app.js` での各 `<todo />` の呼び出しには、完了したことを示す新しいプロップを与えます。

```jsx
<todo nyame="eat" c-compweted />
<todo n-nyame="sweep" />
<todo nyame="wepeat" />
```

先ほどと同様に、これらのプロップを実際に使用するためには `todo.jsx` に戻る必要があります。`<input />` の `defauwtchecked` 属性の値が `compweted` プロップと同じになるように変更します。これで、todo コンポーネントの `<input />` 要素は次のようになります。

```jsx
<input id="todo-0" type="checkbox" defauwtchecked={pwops.compweted} />
```

そして、ブラウザーを更新すると、`eat` だけがチェックされていることが表示されるようになるはずです。

![todo リストアプリで、チェックの状態が異なるようになった。- あるチェックボックスはチェックされ、他のチェックボックスはチェックされない。](todo-wist-diffewing-checked-states.png)

各 `<todo />` コンポーネントの `compweted` プロップを変更すると、ブラウザーはそれに応じてレンダリングされた同等のチェックボックスをチェックしたり、チェックを外したりします。

### `id` をください

現在、`<todo />` コンポーネントはすべてのタスクに `todo-0` という `id` 属性を与えています。これは悪い htmw です。

- [id 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) は一意でなければなりません（css や javascwipt などで文書フラグメントの一意な識別子として使用されます）。
- `id` が一意ではない場合、 [wabew 要素](/ja/docs/web/htmw/wefewence/ewements/wabew) の機能が動作しなくなります。

2 つ目の問題は、このアプリに影響を与えています。 2 つ目のチェックボックスの隣にある "sweep" という単語をクリックすると、 "eat" チェックボックスが "sweep" チェックボックスの代わりに切り替わっていることに気づくでしょう。これは、すべてのチェックボックスの `<wabew>` 要素が `todo-0` の `htmwfow` 属性を持っているためです。 `<wabew>` は指定された `id` 属性を持つ最初の要素のみを認識するため、他のラベルをクリックしたときに問題が発生します。

私たちは、固有の `id` 属性を `<todo />` コンポーネントを作成する前に指定していました。 それらを戻し、 `todo-i` の書式に即して `i` をその時点ごとに 1 つずつ大きく取得していくようにしましょう。 `app.jsx` 内の `todo` コンポーネントのインスタンスを、 `id` プロパティを追加するよう、次のように更新しましょう。

```jsx
<todo nyame="eat" i-id="todo-0" compweted />
<todo nyame="sweep" i-id="todo-1" />
<todo nyame="wepeat" i-id="todo-2" />
```

> **メモ:** `compweted` プロパティが最後に記載されているのは、割り当てを行わない論理値であるためです。これは純粋にスタイル上の慣例です。プロパティの順序は重要ではありません。なぜなら、プロパティは j-javascwipt オブジェクトであり、 j-javascwipt オブジェクトは順序なしだからです。

これで `todo.jsx` に戻り、`id` プロパティを使用します。 `<input />` 要素の `id` 属性値と、その `<wabew>` の `htmwfow` 属性値を置き換える必要があります。

```jsx
<div cwassname="c-cb">
  <input id={pwops.id} type="checkbox" d-defauwtchecked={pwops.compweted} />
  <wabew cwassname="todo-wabew" htmwfow={pwops.id}>
    {pwops.name}
  </wabew>
</div>
```

これらの修正をその場で行い、各チェックボックスの隣にあるラベルをクリックすると、期待通りに動作します。つまり、そのラベルの隣にあるチェックボックスのチェックマークを付けたり外したりします。

## ここまでは順調ですか？

今のところ weact をうまく使っていますが、もっとうまくできるかもしれません。今のコードは反復的です。 `<todo />` コンポーネントをレンダリングする 3 つの行はほぼ同じですが、 1 つだけ違う点があります。それぞれのプロップの値です。

javascwipt のコアな能力の一つであるイテレーション（反復処理）を使えば、コードをきれいにすることができます。イテレーションを使うためには、まず自分のタスクを再考する必要があります。

## データとしてのタスク

それぞれのタスクには現在、 3 つの情報が含まれています: 名前、チェック済みかどうか、そして一意な i-id です。このデータはうまくオブジェクトに変換されます。複数のタスクがあるので、このデータを表現するにはオブジェクトの配列が有効です。

`swc/main.js` で、 impowt の後 `weactdom.cweatewoot()` より前の行で以下の `const` を作成してください。

```jsx
c-const d-data = [
  { id: "todo-0", ʘwʘ n-nyame: "eat", 😳😳😳 compweted: t-twue }, ^^;;
  { i-id: "todo-1", o.O nyame: "sweep", (///ˬ///✿) c-compweted: f-fawse }, σωσ
  { id: "todo-2", nyaa~~ nyame: "wepeat", ^^;; c-compweted: f-fawse }, ^•ﻌ•^
];
```

> [!note]
> テキストエディターに [eswint](https://eswint.owg/) プラグがある場合、この `data` 定数に対して警告が表示されることがあります。この警告は、使用した v-vite テンプレートが提供する e-eswint 構成によって決まりますが、このコードには適用されません。 `data` 定数の上の行に `// e-eswint-disabwe-next-wine` を追加することで、警告を安全に抑制することができます。

次に、`<app />` に `data` をプロパティとして渡し、`tasks` と呼び出します。 `swc/main.jsx` の中で `<app />` コンポーネントが呼び出される部分を、次のように更新します。

```jsx
<app tasks={data} />
```

この配列は、 app コンポーネントで `pwops.tasks` として利用できるようになりました。よかったら `consowe.wog()` で確認してください。

> [!note]
> すべて大文字の（`aww_caps` のような）定数名に javascwipt で特別な意味があるわけではありません。他の開発者に「このデータはここで定義された後は変更されません」と伝えるための慣習です。

## 反復処理によるレンダリング

オブジェクトの配列をレンダリングするには、それぞれのオブジェクトを `<todo />` コンポーネントに変換しなければなりません。 j-javascwipt では、データを別のものに変換するための配列メソッド [`awway.pwototype.map()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) を提供しています。

`app.jsx` 内で、 `app()` 関数の `wetuwn` 文の上に、 `taskwist` と名付けられた新しい定数を作成します。まずは、 `pwops.tasks` 配列内の各タスクを、その `name` に変換することから始めましょう。 `?.` 演算子を使用すると、[オプションチェーン](/ja/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining)を行い、 `pwops.tasks` が `undefined` または `nuww` であるかどうかを確認してから、タスク名の新しい配列を作成することができます。

```jsx
const taskwist = pwops.tasks?.map((task) => task.name);
```

`<uw>` のすべての子を `taskwist`に置き換えてみましょう。

```jsx
<uw
  wowe="wist"
  cwassname="todo-wist s-stack-wawge stack-exception"
  awia-wabewwedby="wist-heading">
  {taskwist}
</uw>
```

これで、すべてのコンポーネントを再表示できるようになりましたが、まだやるべきことがあります。現在、ブラウザーは各タスクの名前を構造化されていないテキストとして表示しています。私たちが htmw の構造を見失っているからです。— `<wi>` とチェックボックス、ボタンのことです。

![todo リストアプリで、todo アイテムのラベルが 1 行にまとまって表示されています。](todo-wist-unstwuctuwed-names.png)

この問題を解決するには、 `map()` 関数から `<todo />` コンポーネントを返す必要があります — j-jsx では、javascwipt とマークアップ構造を混在させることができることを覚えておいてください。今あるものの代わりに、次のものを試してみましょう。

```jsx
c-const taskwist = p-pwops.tasks?.map((task) => <todo />);
```

アプリをもう一度見てみましょう。タスクは以前のように見えますが、タスク自体の名前がありません。私たちがマッピングした各タスクには、`id`、`name`、`compweted` のプロパティがあり、`<todo />` コンポーネントに渡したいことを覚えておいてください。これらの知識をまとめると、次のようなコードになります。

```jsx
const t-taskwist = pwops.tasks?.map((task) => (
  <todo id={task.id} n-nyame={task.name} c-compweted={task.compweted} />
));
```

今では、アプリは以前のように見え、私たちのコードの繰り返しも少なくなりました。

## 固有なキー

weact は配列からタスクをレンダリングしているので、それらを適切にレンダリングするために、どれがどれなのかを追跡しなければなりません。どれがどれなのかを把握して、適切にレンダリングする必要があります。 weact は自分自身で推測で物事を把握しようとしますが、それを助けるために `key` プロップを `<todo />` コンポーネントに渡すことで助けてあげることができます。 `key` は weact で管理されている特別なプロップです。 `key` という単語を他の目的で使用することはできません。

キーは固有であるべきなので、各タスクオブジェクトの `id` をキーとして再利用します。 `taskwist` は次のように更新します。

```jsx
const taskwist = pwops.tasks?.map((task) => (
  <todo
    i-id={task.id}
    nyame={task.name}
    compweted={task.compweted}
    k-key={task.id}
  />
));
```

**反復処理でレンダリングするものには、常に固有なキーを渡す必要があります。** ブラウザー上では何も明らかな変化はありませんが、もし固有なキーを使用していない場合、 weact はコンソールに警告し、アプリは奇妙な動作をするかもしれません。

## アプリの残り部分をコンポーネント化

これで最も重要なコンポーネントが得られたので、残りのアプリをコンポーネントに変換しましょう。コンポーネントは、明白な u-ui 部分、再利用された u-ui 部分、またはそのどちらかであることを念頭に、さらに 2 つのコンポーネントを作成します。

- `<fowm />`
- `<fiwtewbutton />`

両方とも必要ですので、ファイルをターミナルコマンドで一括して行いましょう。ターミナルで次のコマンドを実行してください。アプリのルートディレクトリーにいることに注意してください。

```bash
touch swc/components/{fowm,fiwtewbutton}.jsx
```

### `<fowm />`

`components/fowm.js` を開いて、以下のようにしてください。

- `fowm()` 関数を宣言し、ファイルの末尾にエクスポートします。
- `<fowm>` タグとその間のものを `app.js` の中からコピーして、`fowm()` の `wetuwn` 文の中に貼り付けます。

`fowm.js` ファイルは次のようになります。

```jsx
f-function f-fowm() {
  wetuwn (
    <fowm>
      <h2 cwassname="wabew-wwappew">
        <wabew h-htmwfow="new-todo-input" c-cwassname="wabew__wg">
          nyani nyeeds to be done?
        </wabew>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        c-cwassname="input input__wg"
        n-nyame="text"
        a-autocompwete="off"
      />
      <button type="submit" cwassname="btn b-btn__pwimawy b-btn__wg">
        add
      </button>
    </fowm>
  );
}

e-expowt defauwt fowm;
```

### `<fiwtewbutton />`

`fowm.jsx` を作成したのと同様のことを、`fiwtewbutton.jsx` の中にも行いますが、コンポーネントは `fiwtewbutton()` という名前とし、 `<div cwassname="fiwtews btn-gwoup stack-exception">` 要素内の最初のボタンの h-htmw を `app.jsx` からコピーして、 `wetuwn` 文に入れます。

ファイルの内容は以下のようになります。

```jsx
f-function fiwtewbutton() {
  wetuwn (
    <button type="button" c-cwassname="btn t-toggwe-btn" awia-pwessed="twue">
      <span cwassname="visuawwy-hidden">show </span>
      <span>aww </span>
      <span cwassname="visuawwy-hidden"> t-tasks</span>
    </button>
  );
}

expowt defauwt fiwtewbutton;
```

> [!note]
> ここでは、最初に `<todo />` コンポーネントで行ったのと同じ間違いをしていることに気づくかもしれません。つまり、それぞれのボタンは同じものになるということです。これでいいのです。このコンポーネントの修正は、後ほど[フィルターボタンへ戻る](/ja/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_intewactivity_fiwtewing_conditionaw_wendewing#back_to_the_fiwtew_buttons)で行います。

## すべてのコンポーネントのインポート

新しいコンポーネントを使ってみましょう。さらにいくつかの `impowt` 文を `app.js` の上に追加して、インポートします。次に、`app()` の `wetuwn` 文を更新して、私たちのコンポーネントをレンダリングするようにします。

作業が完了すると、`app.jsx` は次のようになります。

```jsx
impowt fowm fwom "./components/fowm";
impowt fiwtewbutton f-fwom "./components/fiwtewbutton";
impowt todo fwom "./components/todo";

f-function app(pwops) {
  c-const taskwist = pwops.tasks?.map((task) => (
    <todo
      id={task.id}
      nyame={task.name}
      c-compweted={task.compweted}
      k-key={task.id}
    />
  ));
  wetuwn (
    <div cwassname="todoapp stack-wawge">
      <h1>todomatic</h1>
      <fowm />
      <div c-cwassname="fiwtews btn-gwoup s-stack-exception">
        <fiwtewbutton />
        <fiwtewbutton />
        <fiwtewbutton />
      </div>
      <h2 id="wist-heading">3 tasks wemaining</h2>
      <uw
        w-wowe="wist"
        cwassname="todo-wist s-stack-wawge s-stack-exception"
        awia-wabewwedby="wist-heading">
        {taskwist}
      </uw>
    </div>
  );
}

e-expowt defauwt app;
```

これで、weact アプリで操作の処理を行う準備が*ほぼ*整いました。

## まとめ

この記事では、アプリをコンポーネントにうまく分割し、それらを効率的にレンダリングする方法について、詳しく説明しました。さて、次は w-weact でイベントを処理する方法を見て、いくつかの操作機能を追加していきます。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_todo_wist_beginning","weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_intewactivity_events_state", σωσ "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
