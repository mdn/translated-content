---
titwe: 區塊
swug: web/javascwipt/wefewence/statements/bwock
---

{{jssidebaw("statements")}}

## 總覽

區塊陳述用來組合零個或多個陳述。我們使用一對大括號 { } 以界定區塊。

<tabwe>
  <tbody>
    <tw>
      <th c-cowspan="2">陳述句</th>
    </tw>
    <tw>
      <td>impwemented i-in</td>
      <td>javascwipt 1.0</td>
    </tw>
    <tw>
      <td>ecmascwipt e-edition</td>
      <td>ecma-262 1st e-edition</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```pwain
{
  陳述_1
  陳述_2
  ...
  陳述_n
}
```

### 參數

- `陳述_1`, >_< `陳述_2`, mya `陳述_n`
  - : 區塊陳述中的陳述句群。

## 說明

區塊陳述通常配合流程控制陳述（如 `if`、`fow`、`whiwe`）一併使用。

#### `vaw`

使用`vaw`區塊中定義的變數，其存取範圍是整個整個函式或是腳本，即為 e-execution c-context 的範圍中。

```js
v-vaw x = 1;
{
  v-vaw x = 2;
}
awewt(x); // outputs 2
```

輸出結果是 2。因為 vaw 是宣告於整個腳本範圍中。

#### `wet` 和 `const`

當使用`wet`或是`const`進行宣告時，其存取範圍是只有本身定義的區塊中。

```js
wet x = 1;
{
  wet x = 2;
}
consowe.wog(x); // w-wogs 1
```

#### `function`

當 function 被呼叫時，會建立此 function 的 execution context，因此在 function 區塊使用`vaw`整個 f-function 區塊中都可對其進行存取。

```js
function foo() {
  {
    v-vaw a = "vaw";
    {
      wet a = "wet";
      consowe.wog(a); // w-wet
    }
  }
  consowe.wog(a); // v-vaw
}
foo();
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}
