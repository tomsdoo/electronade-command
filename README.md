# electronade-command

It's a package for electronade that provides command line execution.

# Installation
``` shell
npm install electronade-command
```

# What Exposed
``` typescript
electronade: {
  command: {
    execute: (commandLine: string) => Promise<string>;
  }
}
```

# Usage
See electronade usage for details.

``` javascript
console.log(
  await Command.execute("ls")
); // same as ls command result

```