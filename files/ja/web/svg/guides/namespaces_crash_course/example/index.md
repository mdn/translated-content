---
title: 例
slug: Web/SVG/Guides/Namespaces_crash_course/Example
l10n:
  sourceCommit: e4e57ab3ccb5f93319f8fe13848d4895d3e1e771
---

この例で、私たちは [XHTML](/ja/docs/Glossary/XHTML) 、 [SVG](/ja/docs/Web/SVG) 、 [JavaScript](/ja/docs/Web/JavaScript) と [DOM](/ja/docs/Web/API/Document_Object_Model) を「ほこり」の群れを動かすのにつかっています。これらのほこりは 2 つの基本的な法則によって制御されています。1 つめは、それぞれのほこりがマウスカーソルの方向に向かって移動しようとします。2 つ目はそれぞれのほこりはほこりの位置の平均から遠ざかろうとします。組み合わせることで、このとても自然に見える動きができます。

[例を見てみてください](https://mdn.dev/archives/media/samples/svg/swarm-of-motes.xhtml)。このリンク先の例は 2006 年の最善の手法で書かれたものです。下記の例は、現行の JavaScript の最善の手法に更新されています。どちらも動作します。

```xml
<?xml version='1.0'?>
<html xmlns="http://www.w3.org/1999/xhtml"
  xmlns:svg="http://www.w3.org/2000/svg">
  <head>
  <title>ほこりの群</title>
  <style>
  <![CDATA[
    label, input
    {
      width: 150px;
      display: block;
      float: left;
      margin-bottom: 10px;
    }
    label
    {
      text-align: right;
      width: 75px;
      padding-right: 20px;
    }
    br
    {
      clear: left;
    }
  ]]>
  </style>
  </head>
  <body onload='update()'>
    <svg:svg id='display' width='400' height='300'>
      <svg:circle id='cursor' cx='200'
cy='150' r='7' fill='#0000ff' fill-opacity='0.5'/>
    </svg:svg>

    <p>ほこりの群れは 2 つの基本的な法則によって制御されています。
    1 つめは、それぞれのほこりがカーソルの方向に向かって移動しようとします。
    2 つ目はそれぞれのほこりはほこりの位置の平均から遠ざかろうとします。
    組みあわせることで、このとても自然に見える動きができます。
    </p>

    <div>
    (C) 2006 <a id='email-me' href='#'>Nick Johnson</a>

    <script>
    <![CDATA[
      // spam ボット対策
      let email = '@riovia.net';
      email ='nick' + email;
      document.getElementById('email-me').href = 'mailto:'+email;
    ]]>
    </script>
    このソフトは、どのような方法であっても無料で使用することができ、保証はまったくありません。
    </div>

    <form action="" onsubmit="return false;">
      <p>
      <label>ほこりの数:</label>
        <input id='num_motes' value='5'/>
        <br/>

      <label>最大速度:</label>
        <input id='max_velocity' value='15'/>
        <br/>

      <label>カーソルへの引力:</label>
        <input id='attract_cursor' value='6'/>
        <br/>

      <label>仲間との反発力:</label>
        <input id='repel_peer' value='5'/>
        <br/>
      </p>
    </form>

  <script>
  <![CDATA[

    // ほこりの配列
    let motes;

    // 表示用の要素の取得。
    function Display() {
      return document.getElementById('display');
    }

    // 表示用の要素の大きさを定義。
    // これを配列の 2 組タプル(x,y)として返す
    function Dimensions() {
      // 描画用の要素
      const display = Display();
      const width = parseInt(display.getAttributeNS(null, 'width'));
      const height = parseInt(display.getAttributeNS(null, 'height'));

      return [width, height];
    }

    // これはマウスの移動イベントで呼び出される
    const mouse_x = 200;
    const mouse_y = 150;
    function OnMouseMove(evt) {
      mouse_x = evt.clientX;
      mouse_y = evt.clientY;

      const widget = document.getElementById('cursor');
      widget.setAttributeNS(null,'cx',mouse_x);
      widget.setAttributeNS(null,'cy',mouse_y);
    }
    document.onmousemove = OnMouseMove;

    // カーソルの (x,y) を定義
    function Cursor() {
      return [mouse_x, mouse_y];
    }

    // ほこりの平均 (x,y) を定義
    function AverageMotePosition() {
      if (!motes || motes.length === 0) {
        return [0, 0];
      }

      const sum_x = 0;
      const sum_y = 0;
      for (const mote of motes) {
        sum_x += mote.x;
        sum_y += mote.y;
      }

      return [sum_x / motes.length, sum_y / motes.length];
    }

    // よりよい、整数の乱数
    function Rand(modulo)
    {
      return Math.round(Math.random() * (modulo - 1));
    }

    // Mote クラス
    function Mote() {
      // 描画領域の大きさ
      const dims = Dimensions();
      const width = dims[0];
      const height = dims[1];

      // 始めるときのランダムな座標を選ぶ。
      this.x = Rand(width);
      this.y = Rand(height);

      // 速度の初期値はゼロ。
      this.vx = this.vy = 0;

      // 視覚的要素---初期状態ではなし
      this.elt = null;
    }

    // これをクラスに。
    new Mote();

    // Mote::applyForce() - 与えられた方向に
    // 速度を調整。
    // 警告: 擬似的な物理 - なんらかの/実際の/物理法則によって
    // 制御されているわけでありません
    Mote.prototype.applyForce = function (pos, mag) {
      if (pos[0] > this.x) {
        this.vx += mag;
      } else if (pos[0] < this.x) {
        this.vx -= mag;
      }

      if (pos[1] > this.y) {
        this.vy += mag;
      } else if (pos[1] < this.y) {
        this.vy -= mag;
      }
    }

    // Mote::capVelocity() - ほこりの速度の
    // 上限を設定。
    Mote.prototype.capVelocity = function () {
      const max = parseInt(document.getElementById('max_velocity').value);

      if (max < this.vx) {
        this.vx = max;
      } else if (-max > this.vx) {
        this.vx = -max;
      }

      if (max < this.vy) {
        this.vy = max;
      } else if (-max > this.vy) {
        this.vy = -max;
    }

    // Mote::capPosition() - ほこりの位置の
    // 上限下限を設定。
    Mote.prototype.capPosition = function () {
      const dims = Dimensions();
      if (this.x < 0) {
        this.x = 0;
      } else if (this.x >= dims[0]) {
        this.x = dims[0] - 1;
      }

      if (this.y < 0) {
        this.y = 0;
      } else if (this.y >= dims[1]) {
        this.y = dims[1] - 1;
      }
    }

    // Mote::move() - ほこりの移動、スクリーンの更新。
    Mote.prototype.move = function () {
      // カーソルの引力を適応。
      const attract = parseInt(document.getElementById('attract_cursor').value);
      const cursor = Cursor();
      this.applyForce(cursor, attract);

      // ほこりの位置の平均からの反発を適用
      const repel = parseInt(document.getElementById('repel_peer').value);
      const average = AverageMotePosition();
      this.applyForce(average, -repel);

      // 速度にでたらめさを追加。
      this.vx += Rand(3) - 1;
      this.vy += Rand(3) - 1;

      // 速度の上限を適応
      this.capVelocity();

      // 速度を適応。
      const old_x = this.x;
      const old_y = this.y;
      this.x += this.vx;
      this.y += this.vy;
      this.capPosition();

      // 描画。
      if (this.elt === null) {
        const svg = 'http://www.w3.org/2000/svg';
        this.elt = document.createElementNS(svg, 'line');
        this.elt.setAttributeNS(null, 'stroke', 'green');
        this.elt.setAttributeNS(null, 'stroke-width', '3');
        this.elt.setAttributeNS(null, 'stroke-opacity', '0.5');
        Display().appendChild(this.elt);
      }

      this.elt.setAttributeNS(null, 'x1', old_x);
      this.elt.setAttributeNS(null, 'y1', old_y);

      this.elt.setAttributeNS(null, 'x2', this.x);
      this.elt.setAttributeNS(null, 'y2', this.y);
    }

    function update() {
      // 最初の呼び出し?
      if (!motes) {
        motes = [];
      }

      // 幾つのほこりがあるべき ?
      let num = parseInt( document.getElementById('num_motes').value );
      if ( num < 0 ) {
        num = 0;
      }

      // 量を厳密に確認。
      // 少なすぎ ?
      while (motes.length < num) {
        motes.push(new Mote());
      }

      // あるいは多すぎ ?
      if (num === 0) {
        motes = [];
      } else if (motes.length > num) {
        motes = motes.slice(0, num - 1);
      }

      // ほこりをランダムに移動
      if (motes.length > 0) {
        motes[Rand(motes.length)].move();
      }

      // これを 100 分の 1 秒ごとに再実行。
      setTimeout('update()', 10);
    }
  ]]>
  </script>
  </body>
</html>
```
