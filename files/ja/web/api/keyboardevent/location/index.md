---
title: KeyboardEvent.location
slug: Web/API/KeyboardEvent/location
---

{{APIRef("UI Events")}}

**`KeyboardEvent.location`** は読み取り専用のプロパティで、キーボードやその他の入力機器上のキーの位置を表す `unsigned long` を返します。

取りうる値は以下の通りです。

<table class="standard-table">
  <thead>
    <tr>
      <th>定数</th>
      <th>値</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>DOM_KEY_LOCATION_STANDARD</code></td>
      <td>0</td>
      <td>
        このキーは 1 つしかない、または左右の区別がつかないもので、テンキーやキーパッドの一部とみなされるキーで押されたものではありません。
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_LEFT</code></td>
      <td>1</td>
      <td>
        このキーは、左側のキーです。例えば、標準的な 101 キーの US キーボードでは、左側の <kbd>Control</kbd> キーが押されたことになります。この値は、キーボード上に 2 つ以上の位置にある可能性があるキーにのみ使用されます。
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_RIGHT</code></td>
      <td>2</td>
      <td>
        このキーは、右側のキーです。例えば、標準的な 101 キーの US キーボードでは、右側の <kbd>Control</kbd> キーが押されたことになります。この値は、キーボード上に 2 つ以上の位置にある可能性があるキーにのみ使用されます。
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_NUMPAD</code></td>
      <td>3</td>
      <td>
        <p>
          キーがテンキーにあるか、テンキーに対応する仮想キーコードを持っています。
        </p>
        <div class="note">
          <p>
            <strong>メモ:</strong> <kbd>NumLock</kbd> がロックされているとき、Gecko はテンキーのキーに対して常に <code>DOM_KEY_LOCATION_NUMPAD</code> を返します。一方、<kbd>NumLock</kbd> がロックされていない場合、キーボードに実際にテンキーがある場合にも、 Gecko は常に <code>DOM_KEY_LOCATION_NUMPAD</code> を返します。一方、ノートパソコンのようにキーボードにテンキーがない場合、 NumLock がロックされたときだけテンキーとなるキーがあります。このようなキーがキーイベントを発行する場合、 location 属性の値はキーに依存します。つまり、 <code>DOM_KEY_LOCATION_NUMPAD</code> になることはありません。
          </p>
        </div>
        <div class="note">
          <p>
            <strong>メモ:</strong> <kbd>NumLock</kbd> キーのキーイベントは、 Gecko と Internet Explorer の両方で <code>DOM_KEY_LOCATION_STANDARD</code> となります。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code>DOM_KEY_LOCATION_MOBILE</code>
        {{Non-standard_inline()}}{{deprecated_inline}}
      </td>
      <td>4</td>
      <td>
        <p>
          キーはモバイル機器にあります。これは物理的なキーパッドでも仮想キーボードでもかまいません。
        </p>
        <div class="note">
          <p>
            <strong>Note:</strong> Gecko では <code>DOM_KEY_LOCATION_MOBILE</code> を Android （18 以前）、Maemo、<a href="/ja/docs/Mozilla/Boot_to_Gecko" title="Boot to Gecko">Boot to Gecko</a>で常に返します。しかし、 {{gecko("38")}} では、これは削除されました。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code>DOM_KEY_LOCATION_JOYSTICK</code> {{Non-standard_inline()}}
        {{deprecated_inline}}
      </td>
      <td>5</td>
      <td>
        <p>
          このキーは、ゲーム機のコントローラーのボタンやモバイル機器のジョイスティックです。
        </p>
        <div class="note">
          <p>
            <strong>メモ:</strong> Gecko は Android 以外では <code>DOM_KEY_LOCATION_JOYSTICK</code> を持つ信頼されるイベントを発行しません。 18 からは、Android 上のネイティブのキーイベントがこの値を持つ可能性があります。しかし、 {{gecko("38")}} で、この値は削除されました。
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## 値

数値です。

## 例

```js
function keyEvent(event) {
  console.log("押されたキーの位置: " + event.location);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("KeyboardEvent")}}
