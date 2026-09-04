---
title: "課題: 住宅データの UI の構築"
short-title: "課題: 住宅データの UI"
slug: Learn_web_development/Core/Scripting/House_data_UI
l10n:
  sourceCommit: 50a1895c9c499b1b9207f7af945a0fe45de58cca
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/JSON", "Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}

この課題では、不動産サイトの物件検索・絞り込みページ用の JavaScript を記述していただきます。具体的には、JSON データの取得、フォームの入力値に基づいたデータの絞り込み、そしてそのデータを UI に表示する処理を行います。その過程で、条件分岐、ループ、配列や配列メソッドなどの知識も確認していきます。

## 出発点

始めるには、下記コードサンプルパネルにある **Play** ボタンをクリックし、提供された本文テキストを MDN Playground で開いてください。[プロジェクト概要](#プロジェクト概要)の節の手順に従い、JavaScript の機能を完成させてください。

```html live-sample___house-ui-start live-sample___house-ui-finish
<h1>住宅検索</h1>
<p>
  販売中の物件を検索してください。住所、寝室の数、浴室の数で絞り込んで検索することも、条件を指定せずに検索を実行して、すべての物件を表示させることもできます。
</p>
<form>
  <div>
    <label for="choose-street">住所:</label>
    <select id="choose-street" name="choose-street">
      <option value="">住所が選択されていません</option>
    </select>
  </div>
  <div>
    <label for="choose-bedrooms">寝室の数:</label>
    <select id="choose-bedrooms" name="choose-bedrooms">
      <option value="">寝室の数の指定なし</option>
    </select>
  </div>
  <div>
    <label for="choose-bathrooms">浴室の数:</label>
    <select id="choose-bathrooms" name="choose-bathrooms">
      <option value="">浴室の数の指定なし</option>
    </select>
  </div>
  <div>
    <button>住宅を検索</button>
  </div>
</form>
<p id="result-count">結果件数: 0</p>
<section id="output"></section>
```

```css hidden live-sample___house-ui-start live-sample___house-ui-finish
body {
  font: 1.1em / 1.5 system-ui;
  width: clamp(480px, 90%, 1200px);
  margin: 0 auto;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.3em;
}

form div {
  display: flex;
  width: 100%;
  max-width: 500px;
  align-items: center;
  margin-bottom: 20px;
}

label[for],
select {
  flex: 1;
}

#output {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 50px;
}

#output article {
  padding: 0 20px;
  background-color: #efefef;
  border: 2px solid #cccccc;
  border-radius: 10px;
}

#output ul {
  list-style-type: none;
  padding-left: 0;
}
```

```js-nolint live-sample___house-ui-start
const streetSelect = document.getElementById("choose-street");
const bedroomSelect = document.getElementById("choose-bedrooms");
const bathroomSelect = document.getElementById("choose-bathrooms");
const form = document.querySelector("form");

const resultCount = document.getElementById("result-count");
const output = document.getElementById("output");

let houses;

function initializeForm() {

}

function renderHouses(e) {
  // 送信を停止
  e.preventDefault();

  // 残りのコードをここへ
}

// submit リスナーを <form> 要素へ追加
form.addEventListener("submit", renderHouses);

// fetchHouseData() を呼び出してアプリを初期化
fetchHouseData();
```

{{EmbedLiveSample("house-ui-start", "100%", 400)}}

## プロジェクト概要

住所、寝室の数、浴室の数で住宅を検索できるフォームと、検索結果を表示するための要素がいくつか含まれた HTML のインデックスページが用意されています。また、定数や変数の定義、およびいくつかの関数の骨組みが記述された JavaScript ファイルも用意されています。あなたの役割は、住宅検索インターフェイスが動作するように、不足している JavaScript のコードを埋めることです。

指定された定数および変数の定義には、以下の参照があります。

- `streetSelect`: "choose-street" の `<select>` 要素
- `bedroomSelect`: "choose-bedrooms" の `<select>` 要素
- `bathroomSelect`: "choose-bathrooms" の `<select>` 要素
- `form`: `<select>` 要素を含む、全体的な `<form>` 要素
- `resultCount`: "result-count" の `<p>` 要素は。検索のたびに返された結果の数を表示するように更新されます。
- `output`: "output" の `<section>` 要素で、検索結果を表示します。
- `houses`: 最初は空ですが、取得したJSONデータを解析して作成された住宅データオブジェクトがここに格納されます。

基本的な機能は以下の通りです。

- `initializeForm()`: データを照会し、検索可能な候補値を `<select>` 要素に表示します。
- `renderHouses()`: `<select>` 要素の値に基づいてデータがフィルタリングされ、結果が表示されます。

### データの取得

まず最初に行うべきことは、住宅データを取得して `houses` 変数に格納する新しい関数を作成することです。

やるべきことは次の通りです。

1. 変数と定数の定義の直下に、`fetchHouseData()` という名前の新しい関数を作成してください。
2. 関数本体内で、`fetch()` メソッドを使用して、[https://mdn.github.io/shared-assets/misc/houses.json](https://mdn.github.io/shared-assets/misc/houses.json) にある JSON を取得してください。後の手順に備えて、このデータの構造をよく確認しておく必要があります。
3. 結果として返されるプロミスが解決されたら、レスポンスの `ok` プロパティを確認してください。それが `false` の場合は、レスポンスの `status` を報告するカスタムエラーを発生させてください。
4. レスポンスに問題がなければ、`json()` メソッドを使用してそのレスポンスを JSON 形式で返してください。
5. 結果のプロミスが解決されたら、`houses` 変数に `json()` メソッドの結果（これは住宅データを含むオブジェクトの配列になるはずです）を代入し、`initializeForm()` 関数を呼び出してください。

### `initializeForm()` を完成させる

次に、`initializeForm()` 関数の内容を記述する必要があります。この関数は、`houses` に格納されているデータを取得し、それを用いて、フィルタリング可能なすべての値を表す `<option>` 要素を `<select>` 要素に設定します。現時点では、`<select>` 要素には、すべての値を表す値 `""`（空文字列）を持つ単一の `<option>` 要素のみが含まれています。ユーザーは、そのフィールドで結果をフィルタリングしたくない場合に、このオプションを選択することができます。

関数本体の中で、以下の処理を行うコードを書いてください。

1. "choose-street" の `<select>` 要素内にある、すべての異なる住所に対して `<option>` 要素を作成してください。これを行う方法はいくつかありますが、一時的な配列を作成し、 `houses` 内のすべてのオブジェクトをループ処理することをお勧めします。ループ内では、一時的な配列に現在の家の `street` プロパティが含まれているかどうかを確認します。含まれていない場合は、それを一時的な配列に追加し、`street` プロパティを値として含む `<option>` を "choose-street" の `<select>` に追加します。
2. "choose-bedrooms" の `<select>` 要素内に、寝室数のすべての可能な値に対応するオプションを作成してください。これを行うには、`houses` 配列をループ処理して `bedrooms` の最大値を特定し、その後、`1` からその最大値までの各数値について、"choose-bedrooms" の `<select>` 要素に `<option>` を追加する 2 つ目のループを作成します。
3. "choose-bedrooms" の `<select>` 要素内に、浴室の数として考えられるすべての値に対応する選択肢を作成してください。これは、前の手順と同じ手法を用いて解決できます。

> [!NOTE]
> HTML 内に `<option>` 要素を直接記述することも可能ですが、その場合はこの特定のデータセットでのみ機能してしまいます。ここでは、提供されるデータ値にかかわらず（各 house オブジェクトが同じ構造である必要があります）、フォームに正しくデータが入力されるような JavaScript を作成していただきたいのです。

> [!NOTE]
> `innerHTML` プロパティを使用して HTML 要素内に子要素を追加することも可能ですが、そうすることはお勧めしません。ページに追加するデータを常に信頼できるとは限りません。サーバー側で適切にサニタイズされていない場合、悪意のある攻撃者が `innerHTML` を足掛かりとして、ページに対して [クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃を実行する可能性があります。より安全な方法は、`createElement()`、`appendChild()`、`textContent` などの DOM スクリプティング機能を使用することです。子要素のコンテンツを削除するために `innerHTML` を使用することについては、それほど問題にはなりません。

### `renderHouses()` を完成させる

次に、`renderHouses()` 関数の本体を記述する必要があります。これにより、`<select>` 要素の値に基づいてデータをフィルタリングし、結果を UI に表示します。

1. まず、データをフィルタリングする必要があります。これには、配列の `filter()` メソッドを使用するのが最も適しているでしょう。このメソッドは、絞り込み条件に一致する要素のみを含む新しい配列を返します。
   1. これは、実装するのがかなり複雑な `filter()` 関数です。家の `street` プロパティが "choose-street" の `<select>` の選択値と一致するか、家の `bedrooms` プロパティが "choose-bedrooms" の `<select>` の選択値と一致するか、そして家の `bathrooms` プロパティが "choose-bathrooms" の `<select>` の選択値と一致するかを、それぞれ確認する必要があります。
   2. 関連する `<select>` の値が `""`（すべての値を表す空の文字列）である場合、テストの各コンポーネントは常に `true` を返す必要があります。これは、各チェックを「短絡評価」することで実現できます。
   3. また、各チェックにおいてデータ型が一致していることを確認する必要があります。フォーム要素の値は常に文字列です。しかし、オブジェクトのプロパティ値については、必ずしもそうとは限りません。テストを行う上で、どのようにすればデータ型を一致させることができるでしょうか？
2. フィルタリングされた検索結果の件数を、"result-count" の `<p>` 要素に "結果件数: 数値" という文字列形式で出力してください。
3. "output" の `<section>` 要素を空にし、子要素が一切含まれないようにしてください。そうしないと、検索が行われるたびに、検索結果が以前の結果を上書きするのではなく、その末尾に追加されてしまいます。
4. `renderHouses()` 関数の中に、`renderHouse()` という新しい関数を作成してください。この関数は、引数として house オブジェクトを受け取り、次の 2 つの処理を行う必要があります。
   1. 家の `room_sizes` オブジェクトに含まれる各部屋の総面積を計算してください。これは、数値の配列をループして合計するほど単純ではありませんが、それほど難しくはありません。
   2. `<article>` 要素を "output" の `<section>` 要素の中に追加してください。その `<article>` 要素には、家の番地、通り名、寝室と浴室の数、総床面積、および価格を含めてください。構造は自由に変更していただいて構いませんが、以下の HTML スニペットのような形式にしていただくと助かります。

   ```html
   <article>
     <h2>数値 住所</h2>
     <ul>
       <li>🛏️ 寝室: 数値</li>
       <li>🛀 浴室: 数値</li>
       <li>専有面積: 数値 m²</li>
       <li>価格: £price</li>
     </ul>
   </article>
   ```

5. フィルタリングされた配列内のすべての家を順に処理し、それぞれを `renderHouse()` 関数に渡します。

## ヒントとコツ

- HTML や CSS を一切変更する必要はありません。
- 配列内の最大値を見つけるといった作業を行う際、`reduce()` という配列関数が非常に便利です。この関数はかなり複雑であるため、本コースではまだ取り上げていませんが、使い方をマスターすれば非常に強力なツールとなります。さらなる挑戦として、この関数について調べて、解答の中で活用してみてください。

## 例

完成したアプリは、次のライブ例のように動作するはずです。

{{EmbedLiveSample("house-ui-finish", "100%", 700)}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript はこのようになるはずです。

```js live-sample___house-ui-finish
const streetSelect = document.getElementById("choose-street");
const bedroomSelect = document.getElementById("choose-bedrooms");
const bathroomSelect = document.getElementById("choose-bathrooms");
const form = document.querySelector("form");
const resultCount = document.getElementById("result-count");
const output = document.getElementById("output");

let houses;

// 模範解答: データの取得

function fetchHouseData() {
  fetch("https://mdn.github.io/shared-assets/misc/houses.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP エラー: ${response.status}`);
      }

      return response.json();
    })
    .then((json) => {
      houses = json;
      initializeForm();
    });
}

// 模範解答: initializeForm() 関数を完成させる

function initializeForm() {
  // さまざまな住所名に対応する選択肢を作成
  const streetArray = [];
  for (let house of houses) {
    if (!streetArray.includes(house.street)) {
      streetArray.push(house.street);
      streetSelect.appendChild(document.createElement("option")).textContent =
        house.street;
    }
  }

  // すべての取りうる寝室の数の選択肢を作成
  const largestBedrooms = houses.reduce(
    (largest, house) => (house.bedrooms > largest ? house.bedrooms : largest),
    houses[0].bedrooms,
  );
  let i = 1;
  while (i <= largestBedrooms) {
    bedroomSelect.appendChild(document.createElement("option")).textContent = i;
    i++;
  }

  // すべての取りうる浴室の数の選択肢を作成
  const largestBathrooms = houses.reduce(
    (largest, house) => (house.bathrooms > largest ? house.bathrooms : largest),
    houses[0].bathrooms,
  );
  let j = 1;
  while (j <= largestBathrooms) {
    bathroomSelect.appendChild(document.createElement("option")).textContent =
      j;
    j++;
  }
}

// 模範解答: renderHouses() 関数を完成させる

function renderHouses(e) {
  // フォームの送信を阻止
  e.preventDefault();

  // データの絞り込み
  const filteredHouses = houses.filter((house) => {
    // prettier-ignore
    const test = (streetSelect.value === "" ||
                  house.street === streetSelect.value) &&
                 (bedroomSelect.value === "" ||
                  String(house.bedrooms) === bedroomSelect.value) &&
                 (bathroomSelect.value === "" ||
                  String(house.bathrooms) === bathroomSelect.value);
    return test;
  });

  // 結果の件数を "result-count" 段落に出力
  resultCount.textContent = `結果件数: ${filteredHouses.length}`;

  // 出力要素を空にする
  output.innerHTML = "";

  // renderHouse() 関数を作成
  function renderHouse(house) {
    // 部屋の大きさの合計を計算
    let totalArea = 0;
    const keys = Object.keys(house.room_sizes);
    for (let key of keys) {
      totalArea += house.room_sizes[key];
    }

    // 住宅を UI へ出力
    const articleElem = document.createElement("article");
    articleElem.appendChild(document.createElement("h2")).textContent =
      `${house.house_number} ${house.street}`;
    const listElem = document.createElement("ul");
    listElem.appendChild(document.createElement("li")).textContent =
      `🛏️ 寝室: ${house.bedrooms}`;
    listElem.appendChild(document.createElement("li")).textContent =
      `🛀 浴室: ${house.bathrooms}`;
    listElem.appendChild(document.createElement("li")).textContent =
      `専有面積: ${totalArea}m²`;
    listElem.appendChild(document.createElement("li")).textContent =
      `価格: £${house.price}`;
    articleElem.appendChild(listElem);
    output.appendChild(articleElem);
  }

  // 絞り込まれたそれぞれの住宅を renderHouse() へ渡す
  for (let house of filteredHouses) {
    renderHouse(house);
  }
}

// submit リスナーを <form> 要素に追加
form.addEventListener("submit", renderHouses);

// fetchHouseData() を呼び出してアプリを初期化
fetchHouseData();
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/JSON", "Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}
