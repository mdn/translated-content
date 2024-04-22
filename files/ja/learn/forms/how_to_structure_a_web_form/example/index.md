---
title: 例
slug: Learn/Forms/How_to_structure_a_web_form/Example
l10n:
  sourceCommit: 615d347dfc822fd49638f804317f3e95df2f7288
---

これは記事 [ウェブフォームの構築方法](/ja/docs/Learn/Forms/How_to_structure_a_web_form)の基本的なお支払いフォームの例です。

## お支払いフォーム

### HTML コンテンツ

```html
<form method="post">
  <h1>お支払いフォーム</h1>
  <p>
    必須のフィールドには
    <strong><span aria-label="required">*</span></strong> が付いています。
  </p>
  <section>
    <h2>連絡先情報</h2>
    <fieldset>
      <legend>肩書</legend>
      <ul>
        <li>
          <label for="title_1">
            <input type="radio" id="title_1" name="title" value="A" />
            エース
          </label>
        </li>
        <li>
          <label for="title_2">
            <input type="radio" id="title_2" name="title" value="K" />
            キング
          </label>
        </li>
        <li>
          <label for="title_3">
            <input type="radio" id="title_3" name="title" value="Q" />
            クイーン
          </label>
        </li>
      </ul>
    </fieldset>
    <p>
      <label for="name">
        <span>氏名: </span>
        <strong><span aria-label="required">*</span></strong>
      </label>
      <input type="text" id="name" name="username" />
    </p>
    <p>
      <label for="mail">
        <span>メールアドレス: </span>
        <strong><span aria-label="required">*</span></strong>
      </label>
      <input type="email" id="mail" name="usermail" />
    </p>
    <p>
      <label for="pwd">
        <span>パスワード: </span>
        <strong><span aria-label="required">*</span></strong>
      </label>
      <input type="password" id="pwd" name="password" />
    </p>
  </section>
  <section>
    <h2>お支払い情報</h2>
    <p>
      <label for="card">
        <span>カードの種類:</span>
      </label>
      <select id="card" name="usercard">
        <option value="visa">Visa</option>
        <option value="mc">Mastercard</option>
        <option value="amex">American Express</option>
      </select>
    </p>
    <p>
      <label for="number">
        <span>カード番号:</span>
        <strong><span aria-label="required">*</span></strong>
      </label>
      <input type="tel" id="number" name="cardnumber" />
    </p>
    <p>
      <label for="expiration">
        <span>有効期限:</span>
        <strong><span aria-label="required">*</span></strong>
      </label>
      <input
        type="text"
        id="expiration"
        required="true"
        placeholder="MM/YY"
        pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$" />
    </p>
  </section>
  <section>
    <p><button type="submit">お支払いを検証</button></p>
  </section>
</form>
```

### CSS コンテンツ

```css
h1 {
  margin-top: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

form {
  margin: 0 auto;
  width: 400px;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

div + div {
  margin-top: 1em;
}

label span {
  display: inline-block;
  width: 120px;
  text-align: right;
}

input,
textarea {
  font: 1em sans-serif;
  width: 250px;
  box-sizing: border-box;
  border: 1px solid #999;
}

input[type="checkbox"],
input[type="radio"] {
  width: auto;
  border: none;
}

input:focus,
textarea:focus {
  border-color: #000;
}

textarea {
  vertical-align: top;
  height: 5em;
  resize: vertical;
}

fieldset {
  width: 250px;
  box-sizing: border-box;
  margin-left: 136px;
  border: 1px solid #999;
}

button {
  margin: 20px 0 0 124px;
}

label {
  position: relative;
}

label em {
  position: absolute;
  right: 5px;
  top: 20px;
}
```

### 結果

{{ EmbedLiveSample('A_payment_form', '100%', 620) }}
