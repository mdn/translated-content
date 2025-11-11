---
title: 有效顶级域
slug: Glossary/eTLD
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

**eTLD** 是指“有效顶级域”，即单个组织可以在其下注册域名的域。

顶级域名（TLD）是域名中最后一个点后面的部分，例如，`crookedtimber.org` 中的顶级域名是 `org`。

假设只有直接位于顶级域名下的域名可以由单个组织注册，那么你就会知道以下域名都属于同一个组织：

```plain
xyz.org
abc.xyz.org
def.xyz.org
```

然而，这个规则并不普遍适用，因为许多注册商允许组织在顶级域名以下的级别注册域名。这意味着，例如，`sussex.ac.uk` 和 `aber.ac.uk` 是不同组织所有的。

由于这是注册商政策的问题，无法通过算法判断给定的域名后缀（如 `ac.uk`）是否可以公开注册。[公共后缀列表](https://publicsuffix.org/)是一个列出所有可以直接注册域名的后缀的列表，即 eTLD 的列表。

与之相关的概念 **eTLD+1** 指的是一个 eTLD 加上域名的下一个部分。由于 eTLD 是可注册的，所有具有相同 eTLD+1 的域名都属于同一个组织。

例如，以下都是 eTLD+1 域名：

- crookedtimber.org
- theguardian.com
- sussex.ac.uk
- aber.ac.uk

这意味着每个这些域名下的所有域名都属于同一个组织。例如：

```plain
 film.theguardian.com
music.theguardian.com
```

```plain
      news.sussex.ac.uk
      blog.sussex.ac.uk
admissions.sussex.ac.uk
```

## 参见

- [公共后缀列表](https://publicsuffix.org/)
