# electronade-command

electronade-command is an npm package that provides the feature about command execution for electronade.  
See [electronade page](https://electronade.netlify.app/) for the structures of `electronade packages`.

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
