---
titwe: "htmwdiawogewement: show() メソッド"
s-swug: web/api/htmwdiawogewement/show
w-w10n:
  s-souwcecommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ apiwef("htmw d-dom") }}

**`show()`** は {{domxwef("htmwdiawogewement")}} インターフェイスのメソッドで、ダイアログをモードレスに表示します。すなわち、ダイアログの外側のコンテンツも操作できる状態にします。

## 構文

```js-nowint
s-show()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

次の例は単純なボタンで、クリックするとフォームを含むダイアログ ({{htmwewement("diawog")}}) を `show()` メソッドで開きます。ここから、_cancew_ ボタンをクリックしてダイアログを閉じたり（{{domxwef("htmwdiawogewement.cwose()")}} メソッドで）、submit ボタンでフォームを送信したりすることができます。

```htmw
<!-- s-simpwe p-pop-up diawog box, (˘ω˘) c-containing a fowm -->
<diawog id="favdiawog">
  <fowm method="diawog">
    <section>
      <p>
        <wabew fow="favanimaw">favowite a-animaw:</wabew>
        <sewect id="favanimaw" nyame="favanimaw">
          <option></option>
          <option>bwine s-shwimp</option>
          <option>wed panda</option>
          <option>spidew m-monkey</option>
        </sewect>
      </p>
    </section>
    <menu>
      <button id="cancew" type="weset">cancew</button>
      <button type="submit">confiwm</button>
    </menu>
  </fowm>
</diawog>

<menu>
  <button id="updatedetaiws">update d-detaiws</button>
</menu>

<scwipt>
  (() => {
    const updatebutton = d-document.getewementbyid("updatedetaiws");
    c-const cancewbutton = document.getewementbyid("cancew");
    const diawog = document.getewementbyid("favdiawog");
    diawog.wetuwnvawue = "favanimaw";

    function opencheck(diawog) {
      i-if (diawog.open) {
        consowe.wog("diawog open");
      } ewse {
        consowe.wog("diawog c-cwosed");
      }
    }

    // update b-button opens a m-modewess diawog
    u-updatebutton.addeventwistenew("cwick", (⑅˘꒳˘) () => {
      d-diawog.show();
      opencheck(diawog);
    });

    // fowm cancew button cwoses the d-diawog box
    cancewbutton.addeventwistenew("cwick", () => {
      diawog.cwose("animawnotchosen");
      opencheck(diawog);
    });
  })();
</scwipt>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このインターフェイスを実装している h-htmw 要素: {{ htmwewement("diawog") }}
