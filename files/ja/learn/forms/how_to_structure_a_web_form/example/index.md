---
title: '例: お支払いフォーム'
slug: Learn/Forms/How_to_structure_a_web_form/Example
translation_of: Learn/Forms/How_to_structure_a_web_form/Example
original_slug: Learn/Forms/How_to_structure_an_HTML_form/Example
---
これは記事 [HTML フォームの構築方法](/ja/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form)の基本的なお支払いフォームの例です。

## お支払いフォーム

### HTML コンテンツ

```html
<form>
        <h1>Payment form</h1>
        <p>Required fields are followed by <strong><abbr title="required">*</abbr></strong>.</p>
        <section>
            <h2>Contact information</h2>
            <fieldset>
              <legend>Title</legend>
              <ul>
                  <li>
                    <label for="title_1">
                      <input type="radio" id="title_1" name="title" value="M." >
                      Mister
                    </label>
                  </li>
                  <li>
                    <label for="title_2">
                      <input type="radio" id="title_2" name="title" value="Ms.">
                      Miss
                    </label>
                  </li>
              </ul>
            </fieldset>
            <p>
              <label for="name">
                <span>Name: </span>
                <strong><abbr title="required">*</abbr></strong>
              </label>
              <input type="text" id="name" name="username">
            </p>
            <p>
              <label for="mail">
                <span>E-mail: </span>
                <strong><abbr title="required">*</abbr></strong>
              </label>
              <input type="email" id="mail" name="usermail">
            </p>
            <p>
              <label for="password">
                <span>Password: </span>
                <strong><abbr title="required">*</abbr></strong>
              </label>
              <input type="password" id="pwd" name="password">
            </p>
        </section>
        <section>
            <h2>Payment information</h2>
            <p>
              <label for="card">
                <span>Card type:</span>
              </label>
              <select id="card" name="usercard">
                <option value="visa">Visa</option>
                <option value="mc">Mastercard</option>
                <option value="amex">American Express</option>
              </select>
            </p>
            <p>
              <label for="number">
                <span>Card number:</span>
                <strong><abbr title="required">*</abbr></strong>
              </label>
                <input type="number" id="number" name="cardnumber">
            </p>
            <p>
              <label for="date">
                <span>Expiration date:</span>
                <strong><abbr title="required">*</abbr></strong>
                <em>formatted as mm/yy</em>
              </label>
              <input type="date" id="date" name="expiration">
            </p>
        </section>
        <section>
            <p> <button type="submit">Validate the payment</button> </p>
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
          border: 1px solid #CCC;
          border-radius: 1em;
      }

      div+div {
          margin-top: 1em;
      }

      label span {
          display: inline-block;
          width: 120px;
          text-align: right;
      }

      input, textarea {
          font: 1em sans-serif;
          width: 250px;
          box-sizing: border-box;
          border: 1px solid #999;
      }

      input[type=checkbox], input[type=radio] {
          width: auto;
          border: none;
      }

      input:focus, textarea:focus {
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
