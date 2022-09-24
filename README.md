# electronade-command

It's a package for electronade that provides command line execution.  
See [electronade-command.netlify.app](https://electronade-command.netlify.app/) for details.

![npm](https://img.shields.io/npm/v/electronade-command)
![NPM](https://img.shields.io/npm/l/electronade-command)
![npms.io (quality)](https://img.shields.io/npms-io/quality-score/electronade-command)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/electronade-command)
![Maintenance](https://img.shields.io/maintenance/yes/2022)

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
