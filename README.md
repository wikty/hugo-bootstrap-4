# BS4

A theme powered by [Bootstrap v4](https://getbootstrap.com/).

## Installation

You can install the theme either as a clone or submodule.

I recommend the latter. From the root of your Hugo site, type the following:

```
$ git submodule add https://github.com/wikty/hugo-bootstrap-4.git themes/bs4
$ git submodule init
$ git submodule update
```

Now you can get updates to the theme in the future by updating the submodule:

```
$ git submodule update --remote themes/bs4
```

## Configuration

After installation, take a look at the `exampleSite` folder inside `themes/bs4`.

To get started, copy the `config.toml` file inside `exampleSite` to the root of your Hugo site:

```
$ cp themes/bs4/exampleSite/config.toml .
```

Now edit this file and add your own information. Note that some fields can be omitted.

I recommend you use the theme’s archetypes so now delete your site’s `archetypes/default.md`.