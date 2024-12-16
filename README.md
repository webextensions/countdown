# countdown (`@webextensions/countdown`)
A simple countdown timer CLI application

# Usage without installation

```sh
$ npx @webextensions/countdown
<OR>
$ npx --yes --prefer-offline @webextensions/countdown
```

# Usage with installation

```sh
$ npm install --global @webextensions/countdown
$ countdown
```

# Command line arguments

```sh
$ countdown <seconds> <messageOnComplete> <messageOnAbort>
For example:
    $ countdown  5 "Proceed" "Aborted"
    $ countdown 10 "Launch the rocket" "Abort rocket launch!"
```
