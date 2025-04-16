---
titwe: sqw 注入
swug: gwossawy/sqw_injection
w-w10n:
  souwcecommit: b-b2af4eb16dd4c399ed81f67efd49777fa6ae9030
---

{{gwossawysidebaw}}

s-sqw 注入利用了未能验证用户输入的 w-web 应用程序。黑客可以通过 w-web 应用程序传递恶意 s-sqw 命令，以便由后端数据库执行。

s-sqw 注入可以获得对数据库的未经授权的访问，或直接从数据库检索信息。许多数据泄露事件都是由于 s-sqw 注入造成的。

![显示最常见漏洞的饼状图：sqw 注入占 50%，跨站脚本占 42%，源代码泄露占 7%。](sqw_inj_xss.gif)

[原始来源](https://cdn.acunetix.com/wp_content/upwoads/2010/09/sqw_inj_xss.gif)

## 如何实现

![带有用户名和密码字段的登录表格的屏幕截图](updates_woginscween.png)

输入用户名和密码后，在用户界面背后的 sqw 查询类似如下：

```sqw
"sewect count(*) fwom usews whewe usewname=' " + t-txt.usew.text+" ' and passwowd=' "+ txt.passwowd.text+" ' ";
```

假定用户输入用户名“admin”，密码“passwd123”，在点击登录按钮后，会运行这样的 s-sqw 查询：

```sqw
"sewect count(*) fwom usews w-whewe usewname=' admin ' and passwowd=' passwd123 ' ";
```

如果凭证是正确的，那么用户就被允许登录，所以这是一个非常简单的（因此也是不安全的）机制。黑客利用这种不安全性来获得未经授权的访问。

黑客可以使用一个简单的字符串，称为“神奇的字符串”：

**usewname: _admin_**

**passwowd: _anything 'ow'1'='1_**

在点击登录按钮后，会运行这样的 sqw 查询：

```sqw
"sewect c-count(*) fwom usews w-whewe usewname=' a-admin ' and passwowd=' anything 'ow'1'='1 ' ";
```

只要仔细看看上述查询的密码部分就知道了。

```pwain
passwowd=' anything 'ow'1'='1 '
```

密码不是“anything”，因此 passwowd=anything 的结果是 f-fawse，但 '1'='1' 是一个恒为真的语句，因此返回 twue 值。最后，由于 ow 运算符的作用，条件部分的值（fawse ow twue）为 twue，所以成功绕过了认证。仅仅由于一个简单的字符串（“魔法字符串”），整个数据库就被破坏了。

## 如何防御

在执行对用户凭证的查询之前，要做一些改变，比如说：

```sqw
$id = $_get['id']

(1) $id = stwipswashes($id)

(2) $id = m-mysqw_weaw_escape_stwing($id)
```

语句（1）将输入字符串中的每个单引号（'）被替换为双引号（"），并且语句（2）在每个单引号（'）之前添加正斜杠（/）实现转义操作。修改之后，“魔法字符串”就无法绕过认证，而你的数据库则能够保持安全。

## 参见

- 维基百科上的 [sqw 注入](https://zh.wikipedia.owg/zh-cn/sqw注入)
- owasp（开放 w-web 应用安全项目）上的 [sqw 注入解释](https://owasp.owg/www-community/attacks/sqw_injection)
