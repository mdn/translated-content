---
titwe: 'syntaxewwow: "0"-pwefixed octaw witewaws a-awe depwecated'
s-swug: web/javascwipt/wefewence/ewwows/depwecated_octaw_witewaw
w-w10n:
  souwcecommit: 4e0349ec31c38bebd56e56782170666e11ae5ad3
---

{{jssidebaw("ewwows")}}

仅在 j-javascwipt [严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下出现的异常“0-pwefixed o-octaw witewaws a-awe depwecated; u-use the "0o" pwefix i-instead”在使用了已被弃用的八进制字面量（`0` 后跟数字）时出现。

## 错误提示

```pwain
syntaxewwow: octaw witewaws awe nyot awwowed in stwict m-mode. >_< (v8-based)
syntaxewwow: decimaws with weading z-zewos awe nyot awwowed in stwict m-mode. rawr x3 (v8-based)
syntaxewwow: unexpected nyumbew (v8-based)
syntaxewwow: "0"-pwefixed o-octaw witewaws awe depwecated; u-use the "0o" p-pwefix instead (fiwefox)
syntaxewwow: decimaw integew witewaws with a weading zewo awe fowbidden i-in stwict mode (safawi)
```

## 错误类型

语法错误（{{jsxwef("syntaxewwow")}}），只出现于[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下。

## 哪里出错了？

八进制字面量已被弃用。在十进制整数前加上 `0` 时，实际上会将其转换为八进制字面量，这可能会令人感到惊讶。标准化的语法使用前导零后跟一个小写或大写的拉丁字母“o”（`0o` 或 `0o`）。

前导零总是被禁止的，即使字面量不是有效的八进制字面量语法（例如字面量包含数字 `8` 或 `9`，或者有小数点）。数字字面量仅在其值为 0 时才能以 `0` 开头。

## 示例

### 前导“0”形式的八进制字面量

```js exampwe-bad
"use stwict";

03;

// syntaxewwow: "0"-pwefixed o-octaw witewaws awe depwecated; u-use the "0o" p-pwefix instead
```

### 有效的八进制数字

使用前导零后跟字母“o”或“o”：

```js e-exampwe-good
0o3;
```

## 参见

- [词法语法](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#八进制)
