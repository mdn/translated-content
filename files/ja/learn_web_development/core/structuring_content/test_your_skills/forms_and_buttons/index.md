---
title: "スキルテスト: フォームとボタン"
short-title: フォームとボタン
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

このスキルテストの目的は、 [HTML のフォームとボタン](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_forms)を扱う方法を理解しているかどうかを評価することです。

> [!NOTE]
> 手助けが必要な場合は、[スキルテスト](/ja/docs/Learn_web_development#スキルテスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## フォームとボタン 1

この課題では、ユーザー ID とパスワードを入力するための 2 つの `<input>` 要素と、送信ボタンを作成するよう求められます。これは、ゆっくりと丁寧に学習を始めるのに最適な課題です。

この課題を完了するには、次のようにしてください。

1. ユーザー ID およびパスワード用の適切な入力欄を作成します。
2. また、それらをテキストラベルと意味的に関連付ける必要があります。
3. 残りのリストアイテム内に、「ログイン」というボタンテキストを持つ送信ボタンを作成します。

<!-- Code shared across examples -->

```css hidden live-sample___forms-buttons-1 live-sample___forms-buttons-2 live-sample___forms-buttons-3 live-sample___forms-buttons-4 live-sample___forms-buttons-5 live-sample___forms-buttons-6
body {
  background-color: #fff;
  color: #333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0;
}

* {
  box-sizing: border-box;
}
```

<!-- Example-specific code -->

```html live-sample___forms-buttons-1
<form>
  <ul>
    <li>ユーザー ID</li>
    <li>パスワード</li>
    <li></li>
  </ul>
</form>
```

{{ EmbedLiveSample("forms-buttons-1", "100%", 150) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html
<form>
  <ul>
    <li>
      <label for="uid">ユーザー ID</label>
      <input type="text" id="uid" name="uid" />
    </li>
    <li>
      <label for="pwd">パスワード</label>
      <input type="password" id="pwd" name="pwd" />
    </li>
    <li>
      <button>ログイン</button>
    </li>
  </ul>
</form>
```

</details>

## フォームとボタン 2

次の課題では、指定されたテキストラベルから、チェックボックスとラジオボタンの動作するセットを作成する必要があります。

この課題を完了するには、次のようにしてください。

1. 最初の `<fieldset>` のコンテンツをラジオボタンセットに変更します。一度に選択できるポニーキャラクターは 1 つだけにしてください。
2. ページが読み込まれたときに、最初のラジオボタンが選択されるようにします。
3. 2 つ目の `<fieldset>` のコンテンツをチェックボックスセットに変更します。
4. 自分自身でホットドッグの選択肢をいくつか追加します。

```html live-sample___forms-buttons-2
<form>
  <fieldset>
    <legend>好きなポニーはどれ？</legend>
    <ul>
      <li>
        <label for="pinkie">Pinkie Pie</label>
      </li>
      <li>
        <label for="rainbow">Rainbow Dash</label>
      </li>
      <li>
        <label for="twilight">Twilight Sparkle</label>
      </li>
    </ul>
  </fieldset>
  <fieldset>
    <legend>ホットドッグの構成</legend>
    <ul>
      <li>
        <label for="vegan">ビーガン</label>
      </li>
      <li>
        <label for="onions">玉ねぎ</label>
      </li>
    </ul>
  </fieldset>
  <button>送信</button>
</form>
```

{{ EmbedLiveSample("forms-buttons-2", "100%", 350) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html
<form>
  <fieldset>
    <legend>好きなポニーはどれ？</legend>
    <ul>
      <li>
        <label for="pinkie">Pinkie Pie</label>
        <input type="radio" id="pinkie" name="pony" value="pinkie" checked />
      </li>
      <li>
        <label for="rainbow">Rainbow Dash</label>
        <input type="radio" id="rainbow" name="pony" value="rainbow" />
      </li>
      <li>
        <label for="twilight">Twilight Sparkle</label>
        <input type="radio" id="twilight" name="pony" value="twilight" />
      </li>
    </ul>
  </fieldset>
  <fieldset>
    <legend>ホットドッグの構成</legend>
    <ul>
      <li>
        <label for="vegan">ビーガン</label>
        <input type="checkbox" id="vegan" name="hotdog" value="vegan" />
      </li>
      <li>
        <label for="onions">玉ねぎ</label>
        <input type="checkbox" id="onions" name="hotdog" value="onions" />
      </li>
      <li>
        <label for="mustard">マスタード</label>
        <input type="checkbox" id="mustard" name="hotdog" value="mustard" />
      </li>

      <li>
        <label for="ketchup">ケチャップ</label>
        <input type="checkbox" id="ketchup" name="hotdog" value="ketchup" />
      </li>
    </ul>
  </fieldset>
  <button>送信</button>
</form>
```

</details>

## フォームとボタン 3

この課題では、より詳細な入力型について学びます。ユーザーが詳細情報を更新するために、適切な入力を作成してください。

1. メールアドレス
2. ウェブサイト
3. 電話番号
4. 好きな色

```html live-sample___forms-buttons-3
<form>
  <h2>設定を編集</h2>
  <ul>
    <li>
      <label for="email">メールアドレス</label>
    </li>
    <li>
      <label for="website">ウェブサイト</label>
    </li>
    <li>
      <label for="phone">電話番号</label>
    </li>
    <li>
      <label for="fave-color">好きな色</label>
    </li>
    <li>
      <button>構成を更新</button>
    </li>
  </ul>
</form>
```

{{ EmbedLiveSample("forms-buttons-3", "100%", 250) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html
<form>
  <h2>設定を編集</h2>
  <ul>
    <li>
      <label for="email">メールアドレス</label>
      <input type="email" id="email" name="email" />
    </li>
    <li>
      <label for="website">ウェブサイト</label>
      <input type="url" id="website" name="website" />
    </li>
    <li>
      <label for="phone">電話番号</label>
      <input type="tel" id="phone" name="phone" />
    </li>
    <li>
      <label for="fave-color">好きな色</label>
      <input type="color" id="fave-color" name="fave-color" />
    </li>
    <li>
      <button>構成を更新</button>
    </li>
  </ul>
</form>
```

</details>

## フォームとボタン 4

これで、ユーザーが指定された選択肢からお気に入りの料理を選択できるドロップダウン選択メニューを実装する準備が整いました。

この課題を完了するには、次のようにしてください。

1. 基本的な選択ボックス構造を作成します。
2. 指定された "food" ラベルと意味的に関連付けます。
3. リスト内で、選択肢を "mains" と "snacks" の 2 つのサブグループに分割します。

```html-nolint live-sample___forms-buttons-4
<form>
  <ul>
    <li>
      <label for="food">好きな食べ物を選択してください</label>

      サラダ カレー ピザ ファヒータ ビスケット クリスプ フルーツ ブレッドスティック
    </li>
    <li>
      <button>選択を送信</button>
    </li>
  </ul>
</form>
```

{{ EmbedLiveSample("forms-buttons-4", "100%", 250) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html
<form>
  <ul>
    <li>
      <label for="food">好きな食べ物を選択してください</label>
      <select name="food" id="food">
        <optgroup label="mains">
          <option>サラダ</option>
          <option>カレー</option>
          <option>ピザ</option>
          <option>ファヒータ</option>
        </optgroup>
        <optgroup label="snacks">
          <option>ビスケット</option>
          <option>クリスプ</option>
          <option>フルーツ</option>
          <option>ブレッドスティック</option>
        </optgroup>
      </select>
    </li>
    <li>
      <button>選択を送信</button>
    </li>
  </ul>
</form>
```

</details>

## フォームとボタン 5

この課題では、指定されたフォームの機能を構造化してください。

この課題を完了するには、次のようにしてください。

1. 最初の 2 つと 2 つ目のフォームフィールドを 2 つの別個のコンテナーに分け、それぞれのコンテナーに説明的な見出しを付けます（最初の 2 つには「個人情報」、次の 2 つには「コメント情報」を使用）。
2. それぞれのテキストラベルに、そのフォームフィールドと意味的に関連付けられる適切な要素をマークアップします。
3. ラベルとフィールドのペアを区切るために、適切な構造要素のセットを追加します。

```html live-sample___forms-buttons-5
<form>
  氏名:
  <input type="text" id="name" name="name" />

  年齢:
  <input type="number" id="age" name="age" />

  コメント:
  <input type="text" id="comment" name="comment" />

  メールアドレス:
  <input type="email" id="email" name="email" />
</form>
```

{{ EmbedLiveSample("forms-buttons-5", "100%", 250) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html
<form>
  <fieldset>
    <legend>個人情報</legend>
    <ul>
      <li>
        <label for="name">氏名:</label>
        <input type="text" id="name" name="name" />
      </li>
      <li>
        <label for="age">年齢:</label>
        <input type="number" id="age" name="age" />
      </li>
    </ul>
  </fieldset>
  <fieldset>
    <legend>コメント情報</legend>
    <ul>
      <li>
        <label for="comment">コメント:</label>
        <input type="text" id="comment" name="comment" />
      </li>
      <li>
        <label for="email">メールアドレス（返信が必要な場合）:</label>
        <input type="email" id="email" name="email" />
      </li>
    </ul>
  </fieldset>
</form>
```

</details>

## フォームとボタン 6

この課題では、単純なサポート依頼フォームを用意しています。このフォームに、いくつかの検証機能を追加してください。この課題では、「HTML のフォームとボタン」の記事では説明していない知識が必要なので、他の資料で調べておく必要があります。

この課題を完了するには、次のようにしてください。

1. フォームを送信する前に、すべての入力フィールドを必須入力にする。
2. "Email address" および "Phone number" フィールドの型を変更して、要求されるデータに適した、より詳細な検証をブラウザーに適用するようにします。
3. "User name" フィールドの必須文字数を 5 文字から 20 文字、 "Phone number" フィールドの最大文字数を 15 文字、 "Comment" フィールドの最大文字数を 200 文字に設定します。

フォームを送信してみてください。上記の制約が満たされるまで送信は拒否され、適切なエラーメッセージが表示されます。

```html live-sample___forms-buttons-6
<form>
  <h2>サポート依頼を入力してください</h2>
  <ul>
    <li>
      <label for="uname">ユーザー名:</label>
      <input type="text" name="uname" id="uname" />
    </li>
    <li>
      <label for="email">メールアドレス:</label>
      <input type="text" name="email" id="email" />
    </li>
    <li>
      <label for="phone">電話番号:</label>
      <input type="text" name="phone" id="phone" />
    </li>
    <li>
      <label for="comment">コメント:</label>
      <textarea name="comment" id="comment"> </textarea>
    </li>
    <li>
      <button>コメントを送信</button>
    </li>
  </ul>
</form>
```

{{ EmbedLiveSample("forms-buttons-6", "100%", 300) }}

<details>
<summary>クリックすると解答を表示</summary>

完了した HTML は、次のようになるはずです。

```html
<form>
  <h2>Enter your support query</h2>
  <ul>
    <li>
      <label for="uname">ユーザー名:</label>
      <input
        type="text"
        name="uname"
        id="uname"
        required
        minlength="5"
        maxlength="20" />
    </li>
    <li>
      <label for="email">メールアドレス:</label>
      <input type="email" name="email" id="email" required />
    </li>
    <li>
      <label for="phone">電話番号:</label>
      <input type="tel" name="phone" id="phone" required maxlength="15" />
    </li>
    <li>
      <label for="comment">コメント:</label>
      <textarea name="comment" id="comment" required maxlength="200"></textarea>
    </li>
    <li>
      <button>コメントを送信</button>
    </li>
  </ul>
</form>
```

</details>
