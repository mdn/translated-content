---
title: IDBCursorSync
slug: orphaned/Web/API/IDBCursorSync
original_slug: Web/API/IDBCursorSync
---
{{APIRef("IndexedDB")}}

> **警告：** 同步 IndexedDB API 版本 本来计划仅用于[Web Workers](/zh-CN/docs/Web/Guide/Performance/Using_web_workers), 事实上由于本身存在一些问题已经被移除。当然，如果 Web 开发人员有足够的需求， [IndexedDB API](/en/IndexedDB) 的 `IDBCursorSync`表示用于遍历数据库中多个记录的游标。 你只能设置 一个`IDBCursorSync` 代表一种游标实例，但同时可以有无限数量的游标。.此操作在基础索引或对象存储上执行。它使应用程序能够同步处理光标范围内的所有记录。

## 方法概述

```
bool continue (in optional any key);
void remove () raises (IDBDatabaseException);
```

## 属性

<table>
  <thead>
    <tr>
      <th scope="col">属性</th>
      <th scope="col">类型</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a name="attr_count"><code>count</code></a>
      </td>
      <td><code>readonly unsigned long long</code></td>
      <td>共享当前 key 的对象总数</td>
    </tr>
    <tr>
      <td>
        <a name="attr_direction"><code>direction</code></a>
      </td>
      <td><code>readonly unsigned short</code></td>
      <td>游标方向。查看《常量》以获取可能得 value.</td>
    </tr>
    <tr>
      <td>
        <a name="attr_key"><code>key</code></a>
      </td>
      <td><code>readonly any</code></td>
      <td>游标位置记录的 key.</td>
    </tr>
    <tr>
      <td>
        <a name="attr_value"><code>value</code></a>
      </td>
      <td><code>any</code></td>
      <td>
        <p>
          游标位置记录的 value. 使用下面的代码设置这个属性可以增加
          IDBDatabaseException :
        </p>
        <dl>
          <dt>
            <code
              ><a href="/en/IndexedDB/IDBDatabaseException#DATA_ERR"
                >DATA_ERR</a
              ></code
            >
          </dt>
          <dd>
            如果潜在的对象存储使用
            <a href="/en/IndexedDB#gloss_in-line_key">in-line keys</a> 并且 在
            <a href="/en/IndexedDB#gloss_key_path">key path</a>
            中的属性不能匹配这个游标的位置 key
          </dd>
          <dt>
            <code
              ><a href="/en/IndexedDB/IDBDatabaseException#NOT_ALLOWED_ERR"
                >NOT_ALLOWED_ERR</a
              ></code
            >
          </dt>
          <dd>
            如果在<code
              ><a href="/en/IndexedDB/IDBObjectStoreSync#const_read_only"
                >READ_ONLY</a
              ></code
            >
            或者
            <code
              ><a href="/en/IndexedDB/IDBCursorSync#const_snapshot_read"
                >SNAPSHOT_READ</a
              ></code
            >模式下，潜在的下标或者对象存储不支持更新这个记录 , 或者由于潜在的
            index 设置为<a href="/en/IndexedDB#gloss_auto-populated"
              >auto-populated</a
            >.某个 index 记录不能被更新
          </dd>
          <dt>
            <code
              ><a href="/en/IndexedDB/IDBDatabaseException#SERIAL_ERR"
                >SERIAL_ERR</a
              ></code
            >
          </dt>
          <dd>如果存储的数据不能被内部结构化克隆算法序列化。</dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>

## 常量

| 常量                | 值  | 描述                                              |
| ------------------- | --- | ------------------------------------------------- |
| `NEXT`              | 0   | 游标包含重复，并且其方向单调地 key 的顺序递增。   |
| `NEXT_NO_DUPLICATE` | 1   | 游标包含不重复，并且其方向单调地 key 的顺序递增。 |
| `PREV`              | 2   | 游标包含重复，并且其方向单调地 key 的顺序递减。   |
| `PREV_NO_DUPLICATE` | 3   | 游标包含不重复，并且其方向单调地 key 的顺序递减。 |

## 方法

### continue()

将游标沿其方向前进到其键与可选键参数匹配的项。如果没有指定键，则前进到下一个位置。如果游标已到达其范围的末尾，则返回 false，否则返回 true。

```
bool continue (
  in optional any key
);
```

##### Parameters

- key
  - : 移动光标位置的 key。

### remove()

删除光标的位置的记录并不会改变光标的位置

```
void delete (
) raises (DatabaseException);
```

##### Exceptions

使用下面的代码可以增加一个 IDBDatabaseException :

- [`NOT_ALLOWED_ERR`](/en/IndexedDB/IDBDatabaseException#NOT_ALLOWED_ERR)
  - : 如果在[`READ_ONLY`](/en/IndexedDB/IDBObjectStoreSync#const_read_only) 或者 [`SNAPSHOT_READ`](/en/IndexedDB/IDBCursorSync#const_snapshot_read)模式下，潜在的下标或者对象存储不支持更新这个记录 ,
