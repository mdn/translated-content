---
title: 图像文件类型与格式指南
slug: Web/Media/Formats/Image_types
---

{{QuickLinksWithSubpages("/zh-CN/docs/Web/Media")}}

在本指南中，我们将介绍网页浏览器普遍支持的图像文件类型，并提供一些关于他们的信息与见解，帮助您为您的网站选择最合适的图像格式。

## 常见图像文件类型

世界上有非常多的图像文件格式。下面列举了网页上常用的格式，其中 BMP 由于浏览器支持限制而不被推荐，通常应该避免在网页内容中使用。

| 缩写                                                 | 文件格式                                                   | MIME 类型       | 文件拓展名                                 | 浏览器兼容性                                            |
| ---------------------------------------------------- | ---------------------------------------------------------- | --------------- | ------------------------------------------ | ------------------------------------------------------- |
| [APNG](#apng_animated_portable_network_graphics)     | Animated Portable Network Graphics **动态便携式网络图像**  | `image/apng`    | `.apng`                                    | Chrome, Edge, Firefox, Opera, Safari                    |
| [AVIF](#avif)                                        | AV1 Image File Format AV1 图像文件格式                     | `image/avif`    | `.avif`                                    | Chrome, Opera, Firefox (feature flag)                   |
| [BMP](#bmp_bitmap_file)                              | Bitmap file **位图**文件                                   | `image/bmp`     | `.bmp`                                     | Chrome, Edge, Firefox, Internet Explorer, Opera, Safari |
| [GIF](#gif_graphics_interchange_format)              | Graphics Interchange Format 图像互换格式                   | `image/gif`     | `.gif`                                     | Chrome, Edge, Firefox, Internet Explorer, Opera, Safari |
| [ICO](#ico_microsoft_windows_icon)                   | Microsoft Icon 微软图标                                    | `image/x-icon`  | `.ico`, `.cur`                             | Chrome, Edge, Firefox, Internet Explorer, Opera, Safari |
| [JPEG](#jpeg_joint_photographic_experts_group_image) | Joint Photographic Expert Group image 联合影像专家小组图像 | `image/jpeg`    | `.jpg`, `.jpeg`, `.jfif`, `.pjpeg`, `.pjp` | Chrome, Edge, Firefox, Internet Explorer, Opera, Safari |
| [PNG](#png_portable_network_graphics)                | Portable Network Graphics **便携式网络图像**               | `image/png`     | `.png`                                     | Chrome, Edge, Firefox, Internet Explorer, Opera, Safari |
| [SVG](#svg_scalable_vector_graphics)                 | Scalable Vector Graphics **可缩放矢量图形**                | `image/svg+xml` | `.svg`                                     | Chrome, Edge, Firefox, Internet Explorer, Opera, Safari |
| [TIFF](#tiff_tagged_image_file_format)               | Tagged Image File Format 标签图像文件格式                  | `image/tiff`    | `.tif`, `.tiff`                            | Safari                                                  |
| [WebP](#webp_image)                                  | Web Picture format 万维网图像格式                          | `image/webp`    | `.webp`                                    | Chrome, Edge, Firefox, Opera, Safari                    |

每一种格式缩写都有一个详细说明，其功能以及详细的浏览器兼容信息，包括哪个版本引入支持以及以后可能会引入的特殊功能。

## 图像文件格式详介

The following sections provide a brief overview of each of the image file types supported by web browsers.

In the tables below, the term **bits per component** refers to the number of bits used to represent each color component. For example, an RGB color depth of 8 indicates that each of the red, green, and blue components are represented by an 8-bit value. **Bit depth**, on the other hand, is the total number of bits used to represent each pixel in memory.

### <a id="APNG" name="APNG">APNG</a> (Animated Portable Network Graphics)

APNG is a file format first introduced by Mozilla which extends the [PNG](#png_portable_network_graphics) standard to add support for animated images. Conceptually similar to the animated GIF format which has been in use for decades, APNG is more capable in that it supports a variety of [color depths](https://zh.wikipedia.org/wiki/color_depth), whereas animated GIF supports only 8-bit [indexed color](https://zh.wikipedia.org/wiki/indexed_color).

APNG is ideal for basic animations that do not need to synchronize to other activities or to a sound track, such as progress indicators, activity [throbbers](https://zh.wikipedia.org/wiki/throbber), and other animated sequences. For example, APNG is [one of the formats supported when creating animated stickers](https://developer.apple.com/stickers/) for Apple's iMessage application (and the Messages application on iOS). They're also commonly used for the animated portions of web browsers' user interfaces.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td><code>image/apng</code></td>
    </tr>
    <tr>
      <th scope="row">文件拓展名</th>
      <td><code>.apng</code></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>
        <a href="https://wiki.mozilla.org/APNG_Specification"
          >wiki.mozilla.org/APNG_Specification</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>Chrome 59, Edge 12, Firefox 3, Opera 46, Safari 8</td>
    </tr>
    <tr>
      <th scope="row">最高分辨率</th>
      <td>2,147,483,647×2,147,483,647 pixels</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">颜色模式</th>
              <th scope="col">Bits per component (<em>D</em>)</th>
              <th scope="col">描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Greyscale</th>
              <td>1, 2, 4, 8, and 16</td>
              <td>
                Each pixel consists of a single <em>D</em>-bit value indicating
                the brightness of the greyscale pixel.
              </td>
            </tr>
            <tr>
              <th scope="row">True color</th>
              <td>8 and 16</td>
              <td>
                Each pixel is represented by three <em>D</em>-bit values
                indicating the level of the red, green, and blue color
                components.
              </td>
            </tr>
            <tr>
              <th scope="row">Indexed color</th>
              <td>1, 2, 4, and 8</td>
              <td>
                Each pixel is a <em>D</em>-bit value indicating an index into a
                color palette which is contained within a
                <code
                  ><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code
                >
                chunk in the APNG file; the colors in the palette all use an
                8-bit depth.
              </td>
            </tr>
            <tr>
              <th scope="row">Greyscale with alpha</th>
              <td>8 and 16</td>
              <td>
                Each pixel is represented by two <em>D</em>-bit values: the
                intensity of the greyscale pixel and an alpha sample, indicating
                how opaque the pixel is.
              </td>
            </tr>
            <tr>
              <th scope="row">True color with alpha</th>
              <td>8 and 16</td>
              <td>
                Each pixel is comprised of four <em>D</em>-pixel color
                components: red, green, blue, and the alpha sample indicating
                how opaque the pixel is.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>Lossless</td>
    </tr>
    <tr>
      <th scope="row">授权</th>
      <td>
        Free and open under the
        <a href="http://creativecommons.org/licenses/by-sa/3.0/"
          >Creative Commons Attribution-ShareAlike license</a
        >
        (<a href="http://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)
        version 3.0 or later.
      </td>
    </tr>
  </tbody>
</table>

### <a id="BMP" name="BMP">BMP</a> (Bitmap file)

The **BMP** (**Bitmap image**) file type is most prevalent on Windows computers, and is generally used only for special cases in web apps and content.

> **警告：** You should typically avoid using BMP for web site content, as it's not a generally-accepted use of the format.

BMP theoretically supports a variety of internal data representations. The simplest, and most commonly used, form of BMP file is an uncompressed raster image, with each pixel occupying 3 bytes representing its red, green, and blue components, and each row padded with `0x00` bytes to a multiple of 4 bytes wide.

While other data representations are defined in the specification, they are not widely used and often completely unimplemented. These features include: support for different bit depths, indexed color, alpha channels, and different pixel orders (by default, BMP is written from bottom-left corner toward the right and top, rather than from the top-left corner toward the right and bottom).

Theoretically, several compression algorithms are supported, and the image data can also be stored in [JPEG](#jpeg_joint_photographic_experts_group_image) or [PNG](#png_portable_network_graphics) format within the BMP file.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td><code>image/bmp</code></td>
    </tr>
    <tr>
      <th scope="row">文件拓展名</th>
      <td><code>.bmp</code></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>
        No specification; however, Microsoft provides general documentation of
        the format at
        <a
          href="https://docs.microsoft.com/en-us/windows/desktop/gdi/bitmap-storage"
          >docs.microsoft.com/en-us/windows/desktop/gdi/bitmap-storage</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        All versions of Chrome, Edge, Firefox, Internet Explorer, Opera, and
        Safari
      </td>
    </tr>
    <tr>
      <th scope="row">最高分辨率</th>
      <td>
        Either 32,767×32,767 or 2,147,483,647×2,147,483,647 pixels, depending on
        the format version
      </td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">颜色模式</th>
              <th scope="col">Bits per component (<em>D</em>)</th>
              <th scope="col">描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Greyscale</th>
              <td>1</td>
              <td>
                Each bit represents a single pixel, which can be either black or
                white.
              </td>
            </tr>
            <tr>
              <th scope="row">True color</th>
              <td>8 and 16</td>
              <td>
                Each pixel is represented by three values representing the red,
                green, and blue color components; each is <em>D</em> bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indexed color</th>
              <td>2, 4, and 8</td>
              <td>
                Each pixel is represented by a value which is one 2, 4, or 8
                bits, serving as an index into the color table.
              </td>
            </tr>
            <tr>
              <th scope="row">Greyscale with alpha</th>
              <td><em>n/a</em></td>
              <td>BMP has no distinct grayscale format.</td>
            </tr>
            <tr>
              <th scope="row">True color with alpha</th>
              <td>8 and 16</td>
              <td>
                Each pixel is represented by four values representing the red,
                green, blue, and alpha color components; each is
                <em>D</em> bits.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>
        Several compression methods are supported, including lossy or lossless
        algorithms
      </td>
    </tr>
    <tr>
      <th scope="row">授权</th>
      <td>
        Covered by the
        <a
          href="https://docs.microsoft.com/en-us/openspecs/dev_center/ms-devcentlp/1c24c7c8-28b0-4ce1-a47d-95fe1ff504bc"
          >Microsoft Open Specification Promise</a
        >; while Microsoft holds patents against BMP, they have published a
        promise not to assert its patent rights as long as specific conditions
        are met. This is not the same as a license, however. BMP is included
        under the Windows Metafile Format (<code>.wmf</code>).
      </td>
    </tr>
  </tbody>
</table>

### <a id="GIF" name="GIF">GIF</a> (Graphics Interchange Format)

In 1987, the CompuServe online service provider introduced the **[GIF](https://zh.wikipedia.org/wiki/GIF)** (**Graphics Interchange Format**) image file format to provide a compressed graphics format that all members of their service would be able to use. GIF uses the [Lempel-Ziv-Welch](https://zh.wikipedia.org/wiki/Lempel-Ziv-Welch) (LZW) algorithm to losslessly compress 8-bit indexed color graphics. GIF was one of the first two graphics formats supported by {{Glossary("HTML")}}, along with [XBM](#xbm_x_window_system_bitmap_file).

Each pixel in a GIF is represented by a single 8-bit value serving as an index into a palette of 24-bit colors (8 bits each of red, green, and blue). The length of a color table is always a power of 2 (that is, each palette has 2, 4, 8, 16, 32, 64, or 256 entries). To simulate more than 255 or 256 colors, [dithering](https://zh.wikipedia.org/wiki/dithering) is generally used. It is [technically possible](https://gif.ski/) to tile multiple image blocks, each with its own color palette, to create truecolor images, but in practice this is rarely done.

Pixels are opaque, unless a specific color index is designated as transparent, in which case pixels colored that value are entirely transparent.

GIF supports simple animation, in which following an initial full-size frame, a series of images reflecting the parts of the image that change with each frame are provided.

GIF has been extremely popular for decades, due to its simplicity and compatibility. Its animation support caused a resurgence in its popularity in the social media era, when animated GIFs began to be widely used for short "videos", memes, and other simple animation sequences.

Another popular feature of GIF is support for [interlacing](<https://zh.wikipedia.org/wiki/Interlacing_(bitmaps)>), where rows of pixels are stored out of order so that partially-received files can be displayed in lower quality. This is particularly useful when network connections are slow.

GIF is a good choice for simple images and animations, although converting full color images to GIF can result in unsatisfactory dithering. Typically, modern content should use [PNG](#png_portable_network_graphics) for lossless _and_ indexed still images, and should consider using [APNG](#apng_animated_portable_network_graphics) for lossless animation sequences.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td><code>image/gif</code></td>
    </tr>
    <tr>
      <th scope="row">文件拓展名</th>
      <td><code>.gif</code></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>
        <a href="https://www.w3.org/Graphics/GIF/spec-gif87.txt"
          >GIF87a specification</a
        ><br /><a href="https://www.w3.org/Graphics/GIF/spec-gif89a.txt"
          >GIF89a specification</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        All versions of Chrome, Edge, Firefox, Internet Explorer, Opera, and
        Safari
      </td>
    </tr>
    <tr>
      <th scope="row">最高分辨率</th>
      <td>65,536×65,536 pixels</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">颜色模式</th>
              <th scope="col">Bits per component (<em>D</em>)</th>
              <th scope="col">描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Greyscale</th>
              <td><em>n/a</em></td>
              <td>GIF does not include a dedicated greyscale format.</td>
            </tr>
            <tr>
              <th scope="row">True color</th>
              <td><em>n/a</em></td>
              <td>GIF does not support true color pixels.</td>
            </tr>
            <tr>
              <th scope="row">Indexed color</th>
              <td>8</td>
              <td>
                Each color in a GIF palette is defined as 8 bits each of red,
                green, and blue (24 total bits per pixel).
              </td>
            </tr>
            <tr>
              <th scope="row">Greyscale with alpha</th>
              <td><em>n/a</em></td>
              <td>GIF does not provide a dedicated greyscale format.</td>
            </tr>
            <tr>
              <th scope="row">True color with alpha</th>
              <td><em>n/a</em></td>
              <td>GIF does not support true color pixels.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>Lossless (LZW)</td>
    </tr>
    <tr>
      <th scope="row">授权</th>
      <td>
        While the GIF format itself is open, the LZW compression algorithm was
        covered by patents until the early 2000s. As of July 7, 2004, all
        relevant patents have expired and the GIF format may be used freely
      </td>
    </tr>
  </tbody>
</table>

### <a id="ICO" name="ICO">ICO</a> (Microsoft Windows icon)

The ICO (Microsoft Windows icon) file format was designed by Microsoft for desktop icons of Windows systems. However, early versions of Internet Explorer introduced the ability for a web site to provide a ICO file named `favicon.ico` in a web site's root directory to specify a **[favicon](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Adding_custom_icons_to_your_site)** — an icon to be displayed in the Favorites menu, and other places where an iconic representation of the site would be useful.

An ICO file can contain multiple icons, and begins with a directory listing details about each. Following the directory comes the data for the icons. Each icon's data can be either a [BMP](#bmp_bitmap_file) image without the file header, or a complete [PNG](#png_portable_network_graphics) image (including the file header). If you use ICO files, you should use the BMP format, as support for PNG inside ICO files wasn't added until Windows Vista and may not be well supported.

> **警告：** ICO files _should not_ be used in web content. Additionally, their use for favicons has subsided in favor of using a PNG file and the {{HTMLElement("link")}} element, as described in [Providing icons for different usage contexts](/zh-CN/docs/Web/HTML/Element/link#提供用于不同用法上下文的图标).

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td>
        <code>image/vnd.microsoft.icon</code> (official),
        <code>image/x-icon</code> (used by Microsoft)
      </td>
    </tr>
    <tr>
      <th scope="row">文件拓展名</th>
      <td><code>.ico</code></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td></td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        All versions of Chrome, Edge, Firefox, Internet Explorer, Opera, and
        Safari
      </td>
    </tr>
    <tr>
      <th scope="row">最高分辨率</th>
      <td>256×256 pixels</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <table class="standard-table">
          <caption>
            Icons in BMP format
          </caption>
          <tbody>
            <tr>
              <th scope="row">颜色模式</th>
              <th scope="col">Bits per component (<em>D</em>)</th>
              <th scope="col">描述</th>
            </tr>
            <tr>
              <th scope="row">Greyscale</th>
              <td>1</td>
              <td>
                Each bit represents a single pixel, which can be either black or
                white.
              </td>
            </tr>
            <tr>
              <th scope="row">True color</th>
              <td>8 and 16</td>
              <td>
                Each pixel is represented by three values representing the red,
                green, and blue color components; each is <em>D</em> bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indexed color</th>
              <td>2, 4, and 8</td>
              <td>
                Each pixel is represented by a value which is one 2, 4, or 8
                bits, serving as an index into the color table.
              </td>
            </tr>
            <tr>
              <th scope="row">Greyscale with alpha</th>
              <td><em>n/a</em></td>
              <td>BMP has no distinct grayscale format.</td>
            </tr>
            <tr>
              <th scope="row">True color with alpha</th>
              <td>8 and 16</td>
              <td>
                Each pixel is represented by four values representing the red,
                green, blue, and alpha color components; each is
                <em>D</em> bits.
              </td>
            </tr>
          </tbody>
        </table>
        <table class="standard-table">
          <caption>
            Icons in PNG format
          </caption>
          <tbody>
            <tr>
              <th scope="row">颜色模式</th>
              <th scope="col">Bits per component (<em>D</em>)</th>
              <th scope="col">描述</th>
            </tr>
            <tr>
              <th scope="row">Greyscale</th>
              <td>1, 2, 4, 8, and 16</td>
              <td>
                Each pixel consists of a single <em>D</em>-bit value indicating
                the brightness of the greyscale pixel.
              </td>
            </tr>
            <tr>
              <th scope="row">True color</th>
              <td>8 and 16</td>
              <td>
                Each pixel is represented by three <em>D</em>-bit values
                indicating the level of the red, green, and blue color
                components.
              </td>
            </tr>
            <tr>
              <th scope="row">Indexed color</th>
              <td>1, 2, 4, and 8</td>
              <td>
                Each pixel is a <em>D</em>-bit value indicating an index into a
                color palette which is contained within a
                <code
                  ><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code
                >
                chunk in the APNG file; the colors in the palette all use an
                8-bit depth.
              </td>
            </tr>
            <tr>
              <th scope="row">Greyscale with alpha</th>
              <td>8 and 16</td>
              <td>
                Each pixel is represented by two <em>D</em>-bit values: the
                intensity of the greyscale pixel and an alpha sample, indicating
                how opaque the pixel is.
              </td>
            </tr>
            <tr>
              <th scope="row">True color with alpha</th>
              <td>8 and 16</td>
              <td>
                Each pixel is comprised of four <em>D</em>-pixel color
                components: red, green, blue, and the alpha sample indicating
                how opaque the pixel is.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>
        BMP-format icons nearly always use lossless compression, but lossy
        methods are available. PNG icons are always compressed losslessly.
      </td>
    </tr>
    <tr>
      <th scope="row">授权</th>
      <td>—</td>
    </tr>
  </tbody>
</table>

### <a id="JPEG" name="JPEG">JPEG</a> (Joint Photographic Experts Group image)

The {{Glossary("JPEG")}} (typically pronounced "**jay-peg**") image format is currently the most widely used lossy compression format for still images. It's particulary useful for photographs; applying lossy compression to content requiring sharpness, like diagrams or charts, can produce unsatisfactory results.

JPEG is actually a data format for compressed photos, rather than a file type. The JFIF (**J**PEG **F**ile **I**nterchange **F**ormat) specification describes the format of the files we think of as "JPEG" images.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td><code>image/jpeg</code></td>
    </tr>
    <tr>
      <th scope="row">文件拓展名</th>
      <td>
        <code>.jpg</code>, <code>.jpeg</code>, <code>.jpe</code>,
        <code>.jif</code>, <code>.jfif</code>
      </td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td><a href="https://jpeg.org/jpeg/">jpeg.org/jpeg/</a></td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        All versions of Chrome, Edge, Firefox, Internet Explorer, Opera, and
        Safari
      </td>
    </tr>
    <tr>
      <th scope="row">最高分辨率</th>
      <td>65,535×65,535 pixels</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">颜色模式</th>
              <th scope="col">Bits per component (<em>D</em>)</th>
              <th scope="col">描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Greyscale</th>
              <td><em>n/a</em></td>
              <td>JPEG has no distinct greyscale mode.</td>
            </tr>
            <tr>
              <th scope="row">True color</th>
              <td>8</td>
              <td>
                Each pixel is described by the red, blue, and green color
                components, each of which is 8 bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indexed color</th>
              <td><em>n/a</em></td>
              <td>JPEG does not offer an indexed color mode.</td>
            </tr>
            <tr>
              <th scope="row">Greyscale with alpha</th>
              <td><em>n/a</em></td>
              <td>JPEG does not support an alpha channel.</td>
            </tr>
            <tr>
              <th scope="row">True color with alpha</th>
              <td><em>n/a</em></td>
              <td>JPEG does not support an alpha channel.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>
        Lossy; based on the
        <a href="https://zh.wikipedia.org/wiki/discrete_cosine_transform"
          >discrete cosine transform</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">授权</th>
      <td>As of October 27, 2006, all United States patents have expired.</td>
    </tr>
  </tbody>
</table>

### <a id="PNG" name="PNG">PNG</a> (Portable Network Graphics)

The {{Glossary("PNG")}} (pronounced "**ping**") image format uses lossless or lossy compression to provide more efficient compression, and supports higher color depths than [GIF](#gif_graphics_interchange_format), as well as full alpha transparency support.

PNG is widely supported, with all major browsers offering full support for its features. Internet Explorer, which introduced PNG support in versions 4–5, did not fully support it until IE 9, and had many infamous bugs for many of the intervening years, including in the once-omnipresent Internet Explorer 6. This slowed PNG adoption, but it is now commonly used, especially when precise reproduction of the source image is needed.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td><code>image/png</code></td>
    </tr>
    <tr>
      <th scope="row">文件拓展名</th>
      <td><code>.png</code></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td><a href="https://www.w3.org/TR/PNG">w3.org/TR/PNG</a></td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Feature</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Basic support</th>
              <td>1</td>
              <td>12</td>
              <td>1</td>
              <td>5</td>
              <td>3.5.1 (Presto)<br />15 (Blink)</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">Alpha channel</th>
              <td>1</td>
              <td>12</td>
              <td>1</td>
              <td>5</td>
              <td>6 (Presto)<br />All (Blink)</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">Gamma correction</th>
              <td>no</td>
              <td>yes</td>
              <td>1</td>
              <td>8</td>
              <td>1</td>
              <td>broken</td>
            </tr>
            <tr>
              <th scope="row">Color correction</th>
              <td>no</td>
              <td>yes</td>
              <td>3</td>
              <td>9</td>
              <td>no</td>
              <td>no</td>
            </tr>
            <tr>
              <th scope="row">Interlacing</th>
              <td>no</td>
              <td>?</td>
              <td>1</td>
              <td>broken</td>
              <td>3.5.1</td>
              <td>no</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">最高分辨率</th>
      <td>2,147,483,647×2,147,483,647 pixels</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">颜色模式</th>
              <th scope="col">Bits per component (<em>D</em>)</th>
              <th scope="col">描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Greyscale</th>
              <td>1, 2, 4, 8, and 16</td>
              <td>
                Each pixel consists of a single <em>D</em>-bit value indicating
                the brightness of the greyscale pixel.
              </td>
            </tr>
            <tr>
              <th scope="row">True color</th>
              <td>8 and 16</td>
              <td>
                Each pixel is represented by three <em>D</em>-bit values
                indicating the level of the red, green, and blue color
                components.
              </td>
            </tr>
            <tr>
              <th scope="row">Indexed color</th>
              <td>1, 2, 4, and 8</td>
              <td>
                Each pixel is a <em>D</em>-bit value indicating an index into a
                color palette which is contained within a
                <code
                  ><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code
                >
                chunk in the APNG file; the colors in the palette all use an
                8-bit depth.
              </td>
            </tr>
            <tr>
              <th scope="row">Greyscale with alpha</th>
              <td>8 and 16</td>
              <td>
                Each pixel is represented by two <em>D</em>-bit values: the
                intensity of the greyscale pixel and an alpha sample, indicating
                how opaque the pixel is.
              </td>
            </tr>
            <tr>
              <th scope="row">True color with alpha</th>
              <td>8 and 16</td>
              <td>
                Each pixel is comprised of four <em>D</em>-pixel color
                components: red, green, blue, and the alpha sample indicating
                how opaque the pixel is.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>Lossless, optionally indexed color like GIF</td>
    </tr>
    <tr>
      <th scope="row">授权</th>
      <td>
        ©2003 <a href="https://www.w3.org/">W3C</a><sup>®</sup> (<a
          href="http://www.lcs.mit.edu/"
          >MIT</a
        >, <a href="http://www.ercim.org/">ERCIM</a>,
        <a href="http://www.keio.ac.jp/">Keio</a>), All Rights Reserved. W3C
        <a href="http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer"
          >liability</a
        >,
        <a href="http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks"
          >trademark</a
        >,
        <a href="http://www.w3.org/Consortium/Legal/copyright-documents"
          >document use</a
        >
        and
        <a href="http://www.w3.org/Consortium/Legal/copyright-software"
          >software licensing</a
        >
        rules apply. No known royalty-bearing patents.
      </td>
    </tr>
  </tbody>
</table>

### <a id="SVG" name="SVG">SVG</a> (Scalable Vector Graphics)

SVG is an [XML](/zh-CN/docs/Glossary/XML)-based [vector graphics](https://zh.wikipedia.org/wiki/vector_graphics) format that specifies the contents of an image as a set of drawing commands that create shapes, lines, apply colors, filters, and so forth. SVG files are ideal for diagrams, icons, and other images which can be accurately drawn at any size. As such, SVG is popular for user interface elements in modern Web design.

SVG files are text files containing source code that, when interpreted, draws the desired image. For instance, this example defines an drawing area with initial size 100 by 100 units, containing a line drawn diagonally through the box:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
</svg>
```

SVG can be used in web content in two ways:

1. You can directly write the {{HTMLElement("svg")}} element within the HTML, containing [SVG elements](/zh-CN/docs/Web/SVG/Element) to draw the image.
2. You can display an SVG image anywhere you can use any of the other image types, including with the {{HTMLElement("img")}} and {{HTMLElement("picture")}} elements, the {{cssxref("background-image")}} CSS property, and so forth.

SVG is an ideal choice for images which can be represented using a series of drawing commands, especially if the size at which the image will be rendered is unknown or may vary, since SVG will smoothly scale to the desired size. It's not generally useful for strictly bitmap or photographic images, although it is possible to include bitmap images within an SVG.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td><code>image/svg+xml</code></td>
    </tr>
    <tr>
      <th scope="row">文件拓展名</th>
      <td><code>.svg</code></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td><a href="https://www.w3.org/TR/SVG2">w3.org/TR/SVG2</a></td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Feature</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">SVG support</th>
              <td>4</td>
              <td>12</td>
              <td>3</td>
              <td>9</td>
              <td>10 (Presto)<br />15 (Blink)</td>
              <td>3.2</td>
            </tr>
            <tr>
              <th scope="row">
                SVG as image ({{HTMLElement("img")}} etc)
              </th>
              <td>28</td>
              <td>12</td>
              <td>4</td>
              <td>9</td>
              <td>10 (Presto)<br />15 (Blink)</td>
              <td>9</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">最高分辨率</th>
      <td>无限制</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        Colors in SVG are specified using
        <a href="/zh-CN/docs/Web/CSS/color_value">CSS color syntax</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>
        SVG source may be compressed during transit using
        <a href="/zh-CN/docs/Web/HTTP/Compression">HTTP compression</a>
        techniques, or on disk as an <code>.svgz</code> file.
      </td>
    </tr>
    <tr>
      <th scope="row">授权</th>
      <td>
        ©2018 <a href="https://www.w3.org/">W3C</a><sup>®</sup> (<a
          href="http://www.lcs.mit.edu/"
          >MIT</a
        >, <a href="http://www.ercim.org/">ERCIM</a>,
        <a href="http://www.keio.ac.jp/">Keio</a>,
        <a href="http://ev.buaa.edu.cn/">Beihang</a>), All Rights Reserved. W3C
        <a href="http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer"
          >liability</a
        >,
        <a href="http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks"
          >trademark</a
        >,
        <a href="http://www.w3.org/Consortium/Legal/copyright-documents"
          >document use</a
        >
        and
        <a href="http://www.w3.org/Consortium/Legal/copyright-software"
          >software licensing</a
        >
        rules apply. No known royalty-bearing patents.
      </td>
    </tr>
  </tbody>
</table>

### <a id="TIFF" name="TIFF">TIFF</a> (Tagged Image File Format)

[TIFF](https://zh.wikipedia.org/wiki/TIFF) is a raster graphics file format which was created to store scanned photos, although it can be any kind of image. It is a somewhat "heavy" format, in that TIFF files have a tendency to be larger than images in other formats. This is because of the metadata often included, as well as the fact that most TIFF images are either uncompressed or use compression algorithms that still leave fairly large files after compression.

TIFF supports a variety of compression methods, but the most commonly used are the CCITT Group 4 (and, for older fax systems, Group 3) compression systems used for by fax software, as well as LZW and lossy JPEG compression.

Every value in a TIFF file is specified using its **tag** (indicating what kind of information it is, such as the width of the image) and its **type** (indicating the format the data is stored in), followed by the length of the array of values to assign to that tag (all properties are stored in arrays, even for single values). This allows different data types to be used for the same properties. For example, the width of an image, `ImageWidth`, is stored using tag `0x0100`, and is a one-entry array. By specifying type 3 (`SHORT`), the value of `ImageWidth` is stored as a 16-bit value:

| Tag                     | Type               | Size                   | Value                 |
| ----------------------- | ------------------ | ---------------------- | --------------------- |
| `0x0100` (`ImageWidth`) | `0x0003` (`SHORT`) | `0x00000001` (1 entry) | `0x0280` (640 pixels) |

Specifying type 4 (`LONG`) stores the width as a 32-bit value:

| Tag                     | Type              | Size                   | Value                     |
| ----------------------- | ----------------- | ---------------------- | ------------------------- |
| `0x0100` (`ImageWidth`) | `0x0004` (`LONG`) | `0x00000001` (1 entry) | `0x00000280` (640 pixels) |

A single TIFF file can contain multiple images; this may be used to represent multi-page documents, for example (such as a multi-page scanned document, or a received fax). However, software reading TIFF files is only required to support the first image.

TIFF supports a variety of color spaces, not just RGB. These include CMYK, YCbCr, and others, making TIFF a good choice for storing images intended for print, film, or television media.

Long ago, some browsers supported TIFF images in web content; today, however, you need to use special libraries or browser add-ons to do so. As such, TIFF files are not useful within the context of web content, _but_ it's common to provide downloadable TIFF files when distributing photos and other artwork intended for precision editing or printing.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td><code>image/tiff</code></td>
    </tr>
    <tr>
      <th scope="row">文件拓展名</th>
      <td><code>.tif</code>, <code>.tiff</code></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>
        <a href="https://www.adobe.io/open/standards/TIFF.html"
          >adobe.io/open/standards/TIFF.html</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        No browsers integrate support for TIFF; its value is as a download
        format
      </td>
    </tr>
    <tr>
      <th scope="row">最高分辨率</th>
      <td>4,294,967,295×4,294,967,295 pixels (theoretical)</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">颜色模式</th>
              <th scope="col">Bits per component (<em>D</em>)</th>
              <th scope="col">描述</th>
            </tr>
            <tr>
              <th scope="row">Bilevel</th>
              <td>1</td>
              <td>
                A bilevel TIFF stores 8 bits in each byte, one bit per pixel.
                The <code>PhotometricInterpretation</code> field specifies which
                of 0 and 1 are black and which is white.
              </td>
            </tr>
            <tr>
              <th scope="row">Greyscale</th>
              <td>4 and 8</td>
              <td>
                Each pixel consists of a single <em>D</em>-bit value indicating
                the brightness of the greyscale pixel.
              </td>
            </tr>
            <tr>
              <th scope="row">True color</th>
              <td>8</td>
              <td>
                All true color RGB images are stored using 8-bits each of red,
                green, and blue.
              </td>
            </tr>
            <tr>
              <th scope="row">Indexed color</th>
              <td>4 and 8</td>
              <td>
                Each pixel is an index into a <code>ColorMap</code> record,
                which defines the colors used in the image. The color map lists
                all of the red values, then all of the green values, then all of
                the blue values (rather than <code>rgb, rgb, rgb...</code>).
              </td>
            </tr>
            <tr>
              <th scope="row">Greyscale with alpha</th>
              <td>4 and 8</td>
              <td>
                Alpha information is added by specifying that there are more
                than 3 samples per pixel in the
                <code>SamplesPerPixel</code> field, and indicating the type of
                alpha (1 for an associated, pre-multiplied alpha component, and
                2 for unassociated alpha (a separate matte); however, alpha
                channels are rarely used in TIFF files and may be unsupported by
                the user's software.
              </td>
            </tr>
            <tr>
              <th scope="row">True color with alpha</th>
              <td>8</td>
              <td>
                Alpha information is added by specifying that there are more
                than 3 samples per pixel in the
                <code>SamplesPerPixel</code> field, and indicating the type of
                alpha (1 for an associated, pre-multiplied alpha component, and
                2 for unassociated alpha (a separate matte); however, alpha
                channels are rarely used in TIFF files and may be unsupported by
                the user's software.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>
        Most TIFF files are uncompressed, but lossless PackBits and LZW
        compression are supported, as is lossy JPEG compression.
      </td>
    </tr>
    <tr>
      <th scope="row">授权</th>
      <td>
        No license required (aside from any associated with libraries you might
        use); all known patents have expired.
      </td>
    </tr>
  </tbody>
</table>

### <a id="WebP" name="WebP">WebP image</a>

WebP supports lossy compression via predictive coding based on the VP8 video codec, and lossless compression that uses substitutions for repeating data. Lossy WebP images average 25–35% smaller than JPEG images of visually similar compression levels. Lossless WebP images are typically 26% smaller than the same images in PNG format.

WebP also supports animation: in a lossy WebP file, the image data is represented by a VP8 bitstream, which may contain multiple frames. Lossless WebP holds the `ANIM` chunk, which describes the animation, and the `ANMF` chunk, which represents a frame of an animation sequence. Looping is supported.

WebP now has broad support in the latest versions of major web browsers, although it does not have deep historical support. Provide a fallback in either [JPEG](#jpeg_joint_photographic_experts_group_image) or [PNG](#png_portable_network_graphics) format, such as with [the `<picture>` element](/zh-CN/docs/Web/HTML/Element/picture).

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td><code>image/webp</code></td>
    </tr>
    <tr>
      <th scope="row">文件拓展名</th>
      <td><code>.webp</code></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>
        <p>
          <a href="https://developers.google.com/speed/webp/docs/riff_container"
            >RIFF Container Specification</a
          ><br />{{RFC(6386, "VP8 Data Format and Decoding Guide")}}
          (lossy encoding)<br /><a
            href="https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification"
            >WebP Lossless Bitstream Specification</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Feature</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">Lossy WebP support</th>
              <td>17</td>
              <td>18</td>
              <td>65</td>
              <td>no</td>
              <td>11.10 (Presto)<br />15 (Blink)</td>
              <td>no</td>
            </tr>
            <tr>
              <th scope="row">Lossless WebP</th>
              <td>23<br />25 on Android</td>
              <td>18</td>
              <td>65</td>
              <td>no</td>
              <td>12.10 (Presto)<br />15 (Blink)</td>
              <td>no</td>
            </tr>
            <tr>
              <th scope="row">动画</th>
              <td>32</td>
              <td>18</td>
              <td>65</td>
              <td>no</td>
              <td>19 (Blink)</td>
              <td>no</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">最高分辨率</th>
      <td>16,383×16,383 pixels</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        Lossy WebP stores the image in 8-bit Y'CbCr 4:2:0 (YUV420) format.
        Lossless WebP uses 8-bit ARGB color, with each component taking 8 bits
        for a total of 32 bits per pixel.
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>Lossless (Huffman, LZ77, or color cache codes) or lossy (VP8).</td>
    </tr>
    <tr>
      <th scope="row">授权</th>
      <td>No license required; source code is openly available.</td>
    </tr>
  </tbody>
</table>

### <a id="XBM" name="XBM">XBM</a> (X Window System Bitmap file)

XBM (X Bitmap) files were the first to be supported on the Web, but are no longer used and should be avoided, as their format has potential security concerns. Modern browsers have not supported XBM files in many years, but when dealing with older content, you may find some still around.

XBM uses a snippet of C code to represent the contents of the image as an array of bytes. Each image consists of 2 to 4 `#define` directives, providing the width and height of the bitmap (and optionally the hotspot, if the image is designed as a cursor), followed by an array of `unsigned char`, where each value contains 8 1-bit monochrome pixels.

The image must be a multiple of 8 pixels wide. For example, the following code represents an XBM image which is 8 pixels by 8 pixels, with those pixels in a black-and-white checkerboard pattern:

```cpp
#define square8_width 8
#define square8_height 8
static unsigned char square8_bits[] = {
  0xAA, 0x55, 0xAA, 0x55, 0xAA, 0x55, 0xAA, 0x55
};
```

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME 类型</th>
      <td><code>image/xbm</code>, <code>image-xbitmap</code></td>
    </tr>
    <tr>
      <th scope="row">文件拓展名</th>
      <td><code>.xbm</code></td>
    </tr>
    <tr>
      <th scope="row">规范</th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">浏览器兼容性</th>
      <td>Firefox 1–3.5, Internet Explorer 1–5</td>
    </tr>
    <tr>
      <th scope="row">最高分辨率</th>
      <td>无限制</td>
    </tr>
    <tr>
      <th scope="row">支持的颜色模式</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">颜色模式</th>
              <th scope="col">Bits per component</th>
              <th scope="col">描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Greyscale</th>
              <td>1</td>
              <td>Each byte contains eight 1-bit pixels.</td>
            </tr>
            <tr>
              <th scope="row">True color</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
            <tr>
              <th scope="row">Indexed color</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
            <tr>
              <th scope="row">Greyscale with alpha</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
            <tr>
              <th scope="row">True color with alpha</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">压缩</th>
      <td>Lossless</td>
    </tr>
    <tr>
      <th scope="row">授权</th>
      <td>Open source</td>
    </tr>
  </tbody>
</table>

## 选择合适的图像格式

Picking the best image format for your needs is likely easier than video formats, as there are fewer options with broad support, and each tends to have a specific set of use-cases.

### Photographs

Photographs typically fare well with lossy compression (depending on the encoder's configuration). This makes [JPEG](#jpeg_joint_photographic_experts_group_image) and [WebP](#webp_image) good choices for photographs, with JPEG being more compatible but WebP perhaps offering better compression. To maximize quality and minimize download time, consider providing both [using a fallback](#提供后备图像) with WebP as the first choice and JPEG as the second. Otherwise, JPEG is the safe choice for compatibility.

| Best choice  | Fallback |
| ------------ | -------- |
| WebP or JPEG | JPEG     |

### Icons

For smaller images such as icons, use a lossless format to avoid loss of detail in a size-constrained image. While lossless WebP is ideal for this purpose, support is not widespread yet, so PNG is a better choice unless you offer a [fallback](#提供后备图像). If your image contains fewer than 256 colors, GIF is an option, although PNG often compresses even smaller with its indexed compression option (PNG-8).

If the icon can be represented using vector graphics, consider [SVG](#svg_scalable_vector_graphics), since it scales across various resolutions and sizes, so it's perfect for responsive design. Although SVG support is good, it may be worth offering a PNG fallback for older browsers.

| Best choice                | Fallback |
| -------------------------- | -------- |
| SVG, Lossless WebP, or PNG | PNG      |

### Screenshots

Unless you're willing to compromise on quality, you should use a lossless format for screenshots. This is particularly important if there's any text in your screenshot, as text easily becomes fuzzy and unclear under lossy compression.

PNG is probably your best bet, but lossless WebP is arguably going to be better compressed.

| Best choice                                                          | Fallback                                               |
| -------------------------------------------------------------------- | ------------------------------------------------------ |
| Lossless WebP or PNG; JPEG if compression artifacts aren't a concern | PNG or JPEG; GIF for screenshots with low color counts |

### Diagrams, drawings, and charts

For any image that can be represented using vector graphics, SVG is the best choice. Otherwise, you should use a lossless format like PNG. If you do choose a lossy format, such as JPEG or lossy WebP, carefully weigh the compression level to avoid causing text or other shapes to become fuzzy or unclear.

| Best choice                          | Fallback                              |
| ------------------------------------ | ------------------------------------- |
| [SVG](#svg_scalable_vector_graphics) | [PNG](#png_portable_network_graphics) |

## 提供后备图像

While the standard HTML {{HTMLElement("img")}} element doesn't support compatibility fallbacks for images, the {{HTMLElement("picture")}} element does. `<picture>` is used as a wrapper for a number of {{HTMLElement("source")}} elements, each specifying a version of the image in a different format or under different [media conditions](/zh-CN/docs/Web/CSS/@media), as well as an `<img>` element which defines where to display the image and the fallback to the default or "most compatible" version.

For example, if you're displaying a diagram best displayed with SVG, but wish to offer a fallback to a PNG or GIF of the diagram, you would do something like this:

```html
<picture>
  <source srcset="diagram.svg" type="image/svg+xml" />
  <source srcset="diagram.png" type="image/png" />
  <img
    src="diagram.gif"
    width="620"
    height="540"
    alt="Diagram showing the data channels" />
</picture>
```

You can specify as many `<source>`s as you wish, though typically 2 or 3 is all you need.

## 参见

- [Guide to media types and formats](/zh-CN/docs/Web/Media/Formats)
- [Web media technologies](/zh-CN/docs/Web/Media)
- [Guide to video codecs used on the web](/zh-CN/docs/Web/Media/Formats/Video_codecs)
- The {{Glossary("HTML")}} {{HTMLElement("img")}} and {{HTMLElement("picture")}} elements
- The CSS {{cssxref("background-image")}} property
- The {{domxref("Image()")}} constructor and the {{domxref("HTMLImageElement")}} interface
