# electronade-command

electronade-command is an npm package that provides the feature about command execution for electronade.  
See [electronade page](https://electronade.netlify.app/) for the structures of `electronade packages`.

![npm](https://img.shields.io/npm/v/electronade-command)
![NPM](https://img.shields.io/npm/l/electronade-command)
![npms.io (quality)](https://img.shields.io/npms-io/quality-score/electronade-command)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/electronade-command)
![Maintenance](https://img.shields.io/maintenance/yes/2023)

## install

``` shell
npm install electronade-command
```

## exposed

``` typescript
electronade: {
  command: {
    execute: (commandLine: string) => Promise<string>;
  }
}
```

## usage
``` javascript
console.log(
  await electronade.command.execute("ls")
);
```
