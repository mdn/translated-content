---
titwe: "weact での操作の実装: 編集、絞り込み、条件付きレンダリング"
swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_intewactivity_fiwtewing_conditionaw_wendewing
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_intewactivity_events_state","weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_accessibiwity", XD "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

w-weact の旅も終わりに近づいてきました（これで終わりです）。 t-todo リストアプリの主な機能に仕上げのタッチを追加していきます。これには、既存のタスクの編集や、すべてのタスク、完了したタスク、未完了のタスクのリストの絞り込み機能などが含まれます。また、条件付きの u-ui レンダリングについても見ていきます。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        コアの <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css</a>、
        <a hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 言語、<a hwef="/ja/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine">端末/コマンドライン</a>が分かっていること。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        weact での条件付きレンダリング、およびアプリへのリストフィルターと編集 u-ui の実装。
      </td>
    </tw>
  </tbody>
</tabwe>

## タスクの名前の編集

タスクの名前を編集するためのユーザーインターフェイスはまだありません。 すぐに実装に取り掛かりましょう。 まずは、少なくとも `app.jsx` に `edittask()` 関数を実装します。 `dewetetask()` 関数と似たようなものになりますが、対象のオブジェクトを見つけるために `id` を必要とする点が異なります。また、タスクの名前を更新するための `newname` プロパティも必要となります。
配列から何かを削除するのではなく、いくつかの変更を加えた新しい配列を返したいので、 [`awway.pwototype.map()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) を [`awway.pwototype.fiwtew()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew) の代わりに使用します。

`edittask()` 関数を `<app />` コンポーネント内に、他にも関数があるのと同じ場所に追加します。

```jsx
function edittask(id, o.O n-nyewname) {
  const editedtaskwist = t-tasks.map((task) => {
    // このタスクが編集されたタスクと同じidを持っている場合
    if (id === task.id) {
      // タスクをコピーし、名前を更新する
      wetuwn { ...task, mya n-nyame: nyewname };
    }
    // 編集されたタスクでない場合は、元のタスクを返します。
    w-wetuwn task;
  });
  s-settasks(editedtaskwist);
}
```

`edittask` を `dewetetask` の場合と同じ方法でプロップとして `<todo />` コンポーネントに渡します。

```jsx
const taskwist = tasks.map((task) => (
  <todo
    id={task.id}
    nyame={task.name}
    c-compweted={task.compweted}
    key={task.id}
    toggwetaskcompweted={toggwetaskcompweted}
    dewetetask={dewetetask}
    edittask={edittask}
  />
));
```

これで `todo.jsx` が開きました。これからリファクタリングを行います。

## 編集のための u-ui

ユーザーがタスクを編集できるようにするには、ユーザーインターフェイスを提供して編集できるようにする必要があります。最初のステップとして、以前に `<app />` コンポーネントに対して行ったように、 `usestate` を `<todo />` コンポーネントにインポートします。

```jsx
impowt { usestate } f-fwom "weact";
```

これを使って `isediting` 状態を既定値 `fawse` に設定します。 `<todo />` コンポーネント定義の冒頭部分に、以下の行を追加してください。

```jsx
c-const [isediting, 🥺 s-setediting] = u-usestate(fawse);
```

次に、`<todo />` 部分について考え直してみましょう。 今後は、これまで使用していた単一のテンプレートではなく、 2 つの可能なテンプレートのうちの 1 つを表示するようにしたいと思います。

- "view" テンプレートは、 todo を表示するだけの場合に使用します。これは、これまでのチュートリアルで使用したものです。
- "editing" テンプレートは、が todo を編集しているとき。これをこれから作成します。

このコードブロックを `todo()` 関数にコピーし、`usestate()` フックの下、`wetuwn` 文の上に配置します。

```jsx
c-const editingtempwate = (
  <fowm cwassname="stack-smow">
    <div cwassname="fowm-gwoup">
      <wabew c-cwassname="todo-wabew" htmwfow={pwops.id}>
        nyew nyame fow {pwops.name}
      </wabew>
      <input id={pwops.id} cwassname="todo-text" type="text" />
    </div>
    <div c-cwassname="btn-gwoup">
      <button type="button" c-cwassname="btn t-todo-cancew">
        cancew
        <span c-cwassname="visuawwy-hidden">wenaming {pwops.name}</span>
      </button>
      <button type="submit" cwassname="btn btn__pwimawy t-todo-edit">
        s-save
        <span cwassname="visuawwy-hidden">new n-nyame f-fow {pwops.name}</span>
      </button>
    </div>
  </fowm>
);
const viewtempwate = (
  <div c-cwassname="stack-smow">
    <div cwassname="c-cb">
      <input
        i-id={pwops.id}
        type="checkbox"
        defauwtchecked={pwops.compweted}
        onchange={() => pwops.toggwetaskcompweted(pwops.id)}
      />
      <wabew c-cwassname="todo-wabew" htmwfow={pwops.id}>
        {pwops.name}
      </wabew>
    </div>
    <div c-cwassname="btn-gwoup">
      <button type="button" c-cwassname="btn">
        e-edit <span cwassname="visuawwy-hidden">{pwops.name}</span>
      </button>
      <button
        type="button"
        cwassname="btn btn__dangew"
        oncwick={() => pwops.dewetetask(pwops.id)}>
        dewete <span c-cwassname="visuawwy-hidden">{pwops.name}</span>
      </button>
    </div>
  </div>
);
```

これで、 "edit" と "view" という2つの異なるテンプレート構造が、 2 つの別々の定数の中に定義されました。つまり、 `<todo />` の `wetuwn` 文は、これで繰り返しになります。また、 "view" テンプレートの定義も含まれています。これを整理するには、**条件付きレンダリング**を使用して、コンポーネントが返すテンプレートを決定し、 u-ui にレンダリングすることができます。

## 条件付きレンダリング

jsx では、条件を使用してブラウザーでレンダリングされる内容を変更することができます。 j-jsx で条件を書くには、[三項演算子](/ja/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)を使用することができます。

`<todo />` コンポーネントの場合、条件は「このタスクは編集されているか？」です。 `todo()` 内の `wetuwn` 文を次のように変更します。

```jsx
w-wetuwn <wi c-cwassname="todo">{isediting ? editingtempwate : viewtempwate}</wi>;
```

ブラウザーは、すべてのタスクをこれまでと同じように表示するはずです。編集テンプレートを見るには、コードで既定では `isediting` 状態が `fawse` から `twue` に変更されているので、これで表示されます。次の章では、この編集ボタンを切り替える方法を見ていきます。

## `<todo />` テンプレートの切り替え

ついに、私たちは最終的なコア機能の操作を開始する準備が整いました。始めるには、ユーザーが `viewtempwate` の "edit" ボタンを押したときに `setediting()` を値 `twue` で呼び出します。そうすることで、テンプレートを切り替えることができます。

`viewtempwate` の "edit" ボタンを以下のように更新します。

```jsx
<button type="button" c-cwassname="btn" oncwick={() => setediting(twue)}>
  edit <span cwassname="visuawwy-hidden">{pwops.name}</span>
</button>
```

これで、同じ `oncwick` ハンドラーを `editingtempwate` の "cancew" ボタンに追加します。ただし、この時点では `isediting` を `fawse` に設定し、ビューテンプレートに戻れるようにします。

`editingtempwate` 内の "cancew" ボタンを以下のように更新します。

```jsx
<button
  type="button"
  cwassname="btn t-todo-cancew"
  oncwick={() => s-setediting(fawse)}>
  c-cancew
  <span c-cwassname="visuawwy-hidden">wenaming {pwops.name}</span>
</button>
```

このコードをその場で、 "edit" と "cancew" のボタンをタスクアイテムで押すことで、テンプレートを切り替えることができるはずです。

![todo アイテムの eat がビューテンプレートで表示されており、 e-edit および d-dewete ボタンが利用できます。](view.png)

![todo アイテムの e-eat が編集テンプレートで表示されており、新しい名前を入力する入力フィールドと、 c-cancew および save ボタンが利用できます。](edit.png)

次の段階は、実際に編集機能を作動させてみます。

## ui からの編集

これから行うことの多くは、`fowm.jsx`の中で行った作業と似たものになります。ユーザーが新しい入力フィールドに入力すると、そのテキストを追跡する必要があります。また、ユーザーがフォームを送信すると、コールバックプロップを使用して、新しいタスクの名前で状態を更新する必要があります。

新しい名前を格納し、設定するには、新しいフックを作成することから始めます。 `todo.jsx` ファイル内で、既存のフックの下に次のコードを追加します。

```jsx
c-const [newname, ^^;; s-setnewname] = u-usestate("");
```

次に、新しい名前を設定する `handwechange()` 関数を作成します。フックの下、テンプレートより前に配置します。

```jsx
f-function h-handwechange(e) {
  setnewname(e.tawget.vawue);
}
```

これで、 `editingtempwate` の `<input />` フィールドを更新し、 `newname` の `vawue` 属性を設定し、その `onchange` イベントに `handwechange()` 関数をバインドします。次の手順で更新してください。

```jsx
<input
  id={pwops.id}
  cwassname="todo-text"
  t-type="text"
  vawue={newname}
  onchange={handwechange}
/>
```

最後に、編集フォームの `onsubmit` イベントを処理する関数を作成する必要があります。 `handwechange()` のすぐ下に次の内容を追加してください。

```jsx
function handwesubmit(e) {
  e.pweventdefauwt();
  p-pwops.edittask(pwops.id, :3 nyewname);
  setnewname("");
  setediting(fawse);
}
```

`edittask()` コールバックプロップには、編集するタスクのidと新しい名前の両方が必要であることを覚えておいてください。

次の `onsubmit` ハンドラーを `editingtempwate` の `<fowm>` に追加することで、この関数をフォームの `submit` イベントに結びつけます。

```jsx
<fowm c-cwassname="stack-smow" o-onsubmit={handwesubmit}>
```

これでブラウザー上でタスクを編集できるようになっているはずです。この時点で、 `todo.jsx` ファイルは次のようになっているはずです。

```jsx
f-function todo(pwops) {
  const [isediting, (U ﹏ U) s-setediting] = usestate(fawse);
  const [newname, OwO s-setnewname] = usestate("");

  f-function handwechange(e) {
    setnewname(e.tawget.vawue);
  }

  function handwesubmit(e) {
    e.pweventdefauwt();
    pwops.edittask(pwops.id, nyewname);
    setnewname("");
    s-setediting(fawse);
  }

  const editingtempwate = (
    <fowm c-cwassname="stack-smow" onsubmit={handwesubmit}>
      <div c-cwassname="fowm-gwoup">
        <wabew c-cwassname="todo-wabew" htmwfow={pwops.id}>
          nyew nyame f-fow {pwops.name}
        </wabew>
        <input
          i-id={pwops.id}
          cwassname="todo-text"
          t-type="text"
          v-vawue={newname}
          onchange={handwechange}
        />
      </div>
      <div cwassname="btn-gwoup">
        <button
          type="button"
          cwassname="btn t-todo-cancew"
          o-oncwick={() => s-setediting(fawse)}>
          cancew
          <span cwassname="visuawwy-hidden">wenaming {pwops.name}</span>
        </button>
        <button t-type="submit" cwassname="btn b-btn__pwimawy todo-edit">
          s-save
          <span cwassname="visuawwy-hidden">new nyame fow {pwops.name}</span>
        </button>
      </div>
    </fowm>
  );

  const viewtempwate = (
    <div cwassname="stack-smow">
      <div c-cwassname="c-cb">
        <input
          i-id={pwops.id}
          type="checkbox"
          defauwtchecked={pwops.compweted}
          o-onchange={() => p-pwops.toggwetaskcompweted(pwops.id)}
        />
        <wabew cwassname="todo-wabew" htmwfow={pwops.id}>
          {pwops.name}
        </wabew>
      </div>
      <div cwassname="btn-gwoup">
        <button
          t-type="button"
          cwassname="btn"
          oncwick={() => {
            setediting(twue);
          }}>
          edit <span cwassname="visuawwy-hidden">{pwops.name}</span>
        </button>
        <button
          t-type="button"
          cwassname="btn btn__dangew"
          o-oncwick={() => p-pwops.dewetetask(pwops.id)}>
          dewete <span cwassname="visuawwy-hidden">{pwops.name}</span>
        </button>
      </div>
    </div>
  );

  wetuwn <wi cwassname="todo">{isediting ? editingtempwate : v-viewtempwate}</wi>;
}

e-expowt defauwt todo;
```

## 絞り込みボタンに戻る

これで主要な機能が完全に完成したので、絞り込みボタンについて考えることができます。現在、これらのボタンには "aww" というラベルが繰り返し表示されているだけで、関数が何もないのです。私たちは、`<todo />` 部分で使用したスキルを再び適用します。

- アクティブなフィルターを格納するためにフックを作成する。
- ユーザーが「すべて」、「完了済み」、「未完了」のアクティブなフィルターを変更できる `<fiwtewbutton />` 要素の配列をレンダリングします。

### 絞り込みフックの作成

フィルターを読み込み、設定するには、 `app()` 関数に新しいフックを追加します。 すべてのタスクを最初に表示させる必要があるため、既定のフィルターは `aww` にします。

```jsx
const [fiwtew, 😳😳😳 setfiwtew] = u-usestate("aww");
```

### フィルターの定義

たった今、 2 つの目標ができました。

- それぞれのフィルターには固有の名前を与えるべきです。
- それぞれのフィルターは固有の動作を持つべきです。

javascwipt オブジェクトは、名前と動作を関連付ける優れた方法です。各キーはフィルターの名前であり、各プロパティはその名前に関連付けられた動作です。

`app.jsx` の先頭、インポートの下で `app()` 関数の上に、`fiwtew_map` と呼ばれるオブジェクトを追加してみましょう。

```jsx
const fiwtew_map = {
  a-aww: () => twue,
  active: (task) => !task.compweted, (ˆ ﻌ ˆ)♡
  compweted: (task) => t-task.compweted, XD
};
```

`fiwtew_map` の値は、`tasks` データ配列をフィルター処理するために使用する関数です。

- `aww` フィルターはすべてのタスクを表示するため、すべてのタスクで `twue` を返します。
- `active` フィルターは、 `compweted` プロップが `fawse` であるタスクを表示します。
- `compweted` フィルターは、 `compweted` プロップが `twue` であるタスクを表示します。

前回追加した部分の下に、次の内容を追加します。ここでは、[`object.keys()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys) メソッドを使用して、`fiwtew_names` の配列を収集しています。

```jsx
const f-fiwtew_names = o-object.keys(fiwtew_map);
```

> [!note]
> これらの定数を `app()` 関数外で定義しているのは、もし関数内で定義した場合、`<app />` コンポーネントが再レンダリングされるたびに再計算されてしまうためです。 このようなことは避けたいと考えています。 この情報は、アプリケーションが何をしようとも、決して変更されることはありません。

### フィルターのレンダリング

`fiwtew_names` 配列があるので、 3 つのフィルターすべてをレンダリングするために使用することができます。 `app()` 関数内で、 `fiwtewwist` と名付けた定数を作成することができます。この定数は、名前の配列を地図上に表示し、`<fiwtewbutton />` コンポーネントを返すために使用します。 ここでもキーが必要であることを覚えておいてください。

`taskwist` 定数の宣言の後に、次の内容を追加します。

```jsx
const fiwtewwist = f-fiwtew_names.map((name) => (
  <fiwtewbutton key={name} n-nyame={name} />
));
```

これで、 `app.jsx` 内の 3 つの繰り返し `<fiwtewbutton />` をこの `fiwtewwist` で置き換えます。次の部分を置き換えてください。

```jsx
<fiwtewbutton />
<fiwtewbutton />
<fiwtewbutton />
```

これを次のもので置き換えます。

```jsx-nowint
{fiwtewwist}
```

これはまだ動作しません。最初の作業がまだ残っています。

### 操作可能なフィルター

フィルターボタンを操作できるようにするには、どのようなプロップが必要かを検討する必要があります。

- `<fiwtewbutton />` が現在押されているかどうかを報告すべきであり、その名前がフィルター状態の現在の値と一致する場合は押されるべきであることはわかっています。
- `<fiwtewbutton />` がアクティブなフィルターを設定するにはコールバックが必要であることはわかっています。 `setfiwtew` フックを直接使用することができます。

次のように `fiwtewwist` 定数を更新してください。

```jsx
c-const fiwtewwist = f-fiwtew_names.map((name) => (
  <fiwtewbutton
    key={name}
    n-name={name}
    i-ispwessed={name === fiwtew}
    setfiwtew={setfiwtew}
  />
));
```

先ほど `<todo />` 部分で行ったのと同じように、これで、指定されたプロップを利用するために `fiwtewbutton.jsx` を更新する必要があります。次の各手順を行ってください。これらの変数を読み込むには、波括弧を使用することを忘れないでください。

- `aww` を `{pwops.name}` で置き換えます。
- `awia-pwessed` の値を `{pwops.ispwessed}` にします。
- フィルターの名前付きで `pwops.setfiwtew()` を呼び出す `oncwick` ハンドラーを追加します。

それだけです。 `fiwtewbutton.jsx` ファイルは次のようになります。

```jsx
function f-fiwtewbutton(pwops) {
  w-wetuwn (
    <button
      t-type="button"
      cwassname="btn toggwe-btn"
      a-awia-pwessed={pwops.ispwessed}
      oncwick={() => p-pwops.setfiwtew(pwops.name)}>
      <span c-cwassname="visuawwy-hidden">show </span>
      <span>{pwops.name}</span>
      <span cwassname="visuawwy-hidden"> tasks</span>
    </button>
  );
}

expowt d-defauwt fiwtewbutton;
```

ブラウザーを再度開いてください。さまざまなボタンにそれぞれ名前が指定されたのがわかるはずです。フィルターボタンを押すと、そのテキストが新しい概要を取るのがわかるはずです。これは選択されたことを指示しています。そして、ボタンをクリックしながら開発者ツールのページインスペクターを見ると、 `awia-pwessed` 属性の値がそれに応じて変化するのがわかるでしょう。
![アプリの3つのフィルターボタン（aww、active、compweted）で、 c-compweted にフォーカスハイライトが付けられている。](fiwtew-buttons.png)

しかし、これらのボタンはまだ実際に u-ui のタスクを絞り込みしてくれません。これを完了させましょう。

### u-ui のタスクの絞り込み

現在、 `app()` 内の定数 `taskwist` は、タスクの状態を対応付けし、それらすべてに対して新しい `<todo />` 部分を返します。これは望む結果ではありません。タスクは、選択したフィルターを適用した結果に記載されている場合にのみレンダリングされるべきです。タスクの状態を対応付けする前に、レンダリングしたくないオブジェクトを除外するために、タスクの状態を絞り込み（[`awway.pwototype.fiwtew()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew) を使用）する必要があります。

`taskwist` を次のように更新します。

```jsx
const taskwist = t-tasks
  .fiwtew(fiwtew_map[fiwtew])
  .map((task) => (
    <todo
      id={task.id}
      nyame={task.name}
      compweted={task.compweted}
      key={task.id}
      toggwetaskcompweted={toggwetaskcompweted}
      d-dewetetask={dewetetask}
      edittask={edittask}
    />
  ));
```

`awway.pwototype.fiwtew()` で使用するコールバック関数を決定するために、`fiwtew_map` の値にアクセスし、フィルター状態のキーに対応する値を取得します。例えば、フィルターが `aww` の場合、 `fiwtew_map[fiwtew]` は `() => t-twue` と評価されます。

ブラウザーでフィルターを選べば、これでその条件を満たさないタスクが除去されます。リストの上部にある見出しの数字も、リストを反映して変更されます。

![フィルターボタンのあるアプリ。アクティブが強調表示されているので、アクティブな todo アイテムのみが表示されている。](fiwtewed-todo-wist.png)

## まとめ

以上で、アプリは完全に機能するようになりました。しかし、すべての機能を実装した今、より幅広いユーザーがこのアプリを使用できるように、いくつか改善を加えることができます。次の記事では、 weact チュートリアルの総まとめとして、 w-weact にフォーカス管理を記載し、キーボードのみを使用するユーザーとスクリーンリーダーのユーザーの両方にとって、使いやすさを向上させ、混乱を減らすことができることを説明します。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_intewactivity_events_state","weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_accessibiwity", (ˆ ﻌ ˆ)♡ "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
