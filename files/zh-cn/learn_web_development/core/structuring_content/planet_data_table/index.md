---
title: 挑战：构建行星数据表
short-title: 挑战：行星数据表
slug: Learn_web_development/Core/Structuring_content/Planet_data_table
l10n:
  sourceCommit: ee677b2c4d4a226fe4aedf05b2b156cae8a2bb95
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}

在本次挑战中，我们为你提供有关太阳系中行星的一些数据。你的任务是将它们组织为一个无障碍 HTML 表格。

## 起点

1. 在计算机上的适当位置创建一个名为 `planet-data-table` 的新文件夹（或打开在线编辑器，并按照相关步骤创建一个新项目）。
2. 将以下 HTML 代码保存到该文件夹中的一个名为 `index.html` 的文件中（或将其粘贴到在线编辑器的 HTML 编辑区中）。

   ```html
   <!doctype html>
   <html lang="zh-CN">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>行星数据表</title>
       <link href="style.css" rel="stylesheet" type="text/css" />
     </head>
     <body>
       <h1>行星数据表</h1>
     </body>
   </html>
   ```

3. 请将以下 CSS 代码保存到文件夹中的一个名为 `style.css` 的文件中（或将其粘贴到在线编辑器的 CSS 面板中）。

   ```css live-sample___planet-data-table
   html {
     font-family: sans-serif;
   }

   table {
     border-collapse: collapse;
     border: 2px solid rgb(200 200 200);
     letter-spacing: 1px;
     font-size: 0.8rem;
   }

   td,
   th {
     border: 1px solid rgb(190 190 190);
     padding: 10px 20px;
   }

   th {
     background-color: rgb(235 235 235);
   }

   td {
     text-align: center;
   }

   tr:nth-child(even) td {
     background-color: rgb(250 250 250);
   }

   tr:nth-child(odd) td {
     background-color: rgb(245 245 245);
   }

   caption {
     padding: 10px;
   }

   .column-border {
     border: 2px solid black;
   }
   ```

4. 请将以下数据备好；你需要在 HTML 代码中将其转换为 HTML 数据表。

   ```plain
   行

   类地行星

   水星 0.330 4879 5427 3.7 4222.6 57.9 167 0 距太阳最近
   金星 4.87 12104 5243 8.9 2802.0 108.2 464 0
   地球 5.97 12756 5514 9.8 24.0 149.6 15 1 我们的家园
   火星 0.642 6792 3933 3.7 24.7 227.9 -65 2 红色星球

   类木行星

   气态巨行星

   木星 1898 142984 1326 23.1 9.9 778.6 -110 67 最大的行星
   土星 568 120536 687 9.0 10.7 1433.5 -140 62

   冰巨行星

   天王星 86.8 51118 1271 8.7 17.2 2872.5 -195 27
   海王星 102 49528 1638 11.0 16.1 4495.1 -200 14

   矮行星*

   冥王星 0.0146 2370 2095 0.7 153.3 5906.4 -225 5 2006 年被降级为矮行星，但<a href="http://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/">仍存在争议</a>。

   列

   名称
   质量（10<sup>24</sup>千克）
   直径（千米）
   密度（千克每立方米）
   重力加速度（米每二次方秒）
   自转周期（小时）
   距太阳距离（10<sup>6</sup>千米）
   平均温度（摄氏度）
   卫星数量
   备注

   图注

   关于太阳系行星的数据（行星资料摘自<a href="http://nssdc.gsfc.nasa.gov/planetary/factsheet/">美国宇航局行星数据表——公制</a>）。
   ```

## 项目概要

你正在一所学校任教；目前，你的学生正在学习太阳系的行星，你想为他们提供一套易于理解的数据集，以便他们查阅有关行星的事实和数据。一个 HTML 数据表将是理想的选择——你需要将手头的原始数据转换为表格，具体操作请按照以下步骤进行。

你所需的所有数据都包含在上面提供的数据列表中。如果你难以想象这些数据的具体呈现形式，可以查看下方的实时示例，或者尝试画个图表。

1. 首先为表格创建一个外层容器、表头和表体。本示例中无需表脚。
2. 将提供的标题添加到表格中。
3. 在表头中添加一行，包含所有列标题。
4. 在表格主体内创建所有内容行，并注意从语义上将所有行标题设置为标题。
5. 确保所有内容都放置在正确的单元格中——在原始数据中，每行行星数据都显示在其对应行星的旁边。
6. 添加属性，使行标题和列标题与它们所作为标题的行、列或行组建立明确的关联。
7. 在包含所有行星名称行标题的列周围添加一条黑色[边框](/zh-CN/docs/Web/CSS/Reference/Properties/border)。请使用适当的 `<colgroup>`/`<col>` 结构，并应用 CSS 中提供的 `.column-border` 类样式来实现。

## 提示与技巧

- 标题行的第一个单元格必须为空，且需横跨两列。
- 位于行星名称行标题（例如*土星*）左侧的分组行标题（例如*木星系行星*）处理起来稍显棘手——你需要确保每个标题都占据正确的行数和列数。
- 将标题与相应的行/列关联起来，其中一种方法比另一种要简单得多。

## 示例

正确标记后，该表格应如下所示。如果遇到困难，请查看实时示例下方的解决方案。

{{embedlivesample("planet-data-table", "100%", 650)}}

```html live-sample___planet-data-table
<h1>行星数据表</h1>

<table>
  <caption>
    关于太阳系行星的数据（行星资料摘自<a
      href="http://nssdc.gsfc.nasa.gov/planetary/factsheet/"
      >美国宇航局行星数据表——公制</a
    >）。
  </caption>
  <colgroup>
    <col span="2" />
    <col class="column-border" />
    <col span="9" />
  </colgroup>
  <thead>
    <tr>
      <td colspan="2"></td>
      <th scope="col">名称</th>
      <th scope="col">质量（10<sup>24</sup>千克）</th>
      <th scope="col">直径（千米）</th>
      <th scope="col">密度（千克每立方米）</th>
      <th scope="col">重力加速度（米每二次方秒）</th>
      <th scope="col">自转周期（小时）</th>
      <th scope="col">距太阳距离（10<sup>6</sup>千米）</th>
      <th scope="col">平均温度（摄氏度）</th>
      <th scope="col">卫星数量</th>
      <th scope="col">备注</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="4" colspan="2" scope="rowgroup">类地行星</th>
      <th scope="row">水星</th>
      <td>0.330</td>
      <td>4879</td>
      <td>5427</td>
      <td>3.7</td>
      <td>4222.6</td>
      <td>57.9</td>
      <td>167</td>
      <td>0</td>
      <td>距太阳最近</td>
    </tr>
    <tr>
      <th scope="row">金星</th>
      <td>4.87</td>
      <td>12104</td>
      <td>5243</td>
      <td>8.9</td>
      <td>2802.0</td>
      <td>108.2</td>
      <td>464</td>
      <td>0</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">地球</th>
      <td>5.97</td>
      <td>12756</td>
      <td>5514</td>
      <td>9.8</td>
      <td>24.0</td>
      <td>149.6</td>
      <td>15</td>
      <td>1</td>
      <td>我们的家园</td>
    </tr>
    <tr>
      <th scope="row">火星</th>
      <td>0.642</td>
      <td>6792</td>
      <td>3933</td>
      <td>3.7</td>
      <td>24.7</td>
      <td>227.9</td>
      <td>-65</td>
      <td>2</td>
      <td>红色星球</td>
    </tr>
    <tr>
      <th rowspan="4" scope="rowgroup">类木行星</th>
      <th rowspan="2" scope="rowgroup">气态巨行星</th>
      <th scope="row">木星</th>
      <td>1898</td>
      <td>142984</td>
      <td>1326</td>
      <td>23.1</td>
      <td>9.9</td>
      <td>778.6</td>
      <td>-110</td>
      <td>67</td>
      <td>最大的行星</td>
    </tr>
    <tr>
      <th scope="row">土星</th>
      <td>568</td>
      <td>120536</td>
      <td>687</td>
      <td>9.0</td>
      <td>10.7</td>
      <td>1433.5</td>
      <td>-140</td>
      <td>62</td>
      <td></td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">冰巨行星</th>
      <th scope="row">天王星</th>
      <td>86.8</td>
      <td>51118</td>
      <td>1271</td>
      <td>8.7</td>
      <td>17.2</td>
      <td>2872.5</td>
      <td>-195</td>
      <td>27</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">海王星</th>
      <td>102</td>
      <td>49528</td>
      <td>1638</td>
      <td>11.0</td>
      <td>16.1</td>
      <td>4495.1</td>
      <td>-200</td>
      <td>14</td>
      <td></td>
    </tr>
    <tr>
      <th colspan="2" scope="rowgroup">矮行星</th>
      <th scope="row">冥王星</th>
      <td>0.0146</td>
      <td>2370</td>
      <td>2095</td>
      <td>0.7</td>
      <td>153.3</td>
      <td>5906.4</td>
      <td>-225</td>
      <td>5</td>
      <td>
        2006 年被降级为矮行星，但<a
          href="http://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/"
          >仍存在争议</a
        >。
      </td>
    </tr>
  </tbody>
</table>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}
