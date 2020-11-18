# Shopgate Connect - content styling

This extension applies given styling to DOM by given css selectors.

## Configuration
### styles
**Schema:**
```json
{
    styles: {
        "<cssSelector>": <glamorStyleObject>
    }
}
```
Where `<cssSelector>` can be any valid css selector and `<glamorStyleObject>` a valid [glamor](https://github.com/threepointone/glamor/blob/master/docs/howto.md) style object

**Example:**
```json
{
    styles: {
        ".headline": {
          "color": "blue"
        },
        ".price": {
          "color": "yellow"
        },
        "body > div": {
          "fontSize": "15px"
        }
    }
}
```

**Currently available classes in themes:**
- headline
- price
- price-striked
- product-name
- rating-stars-empty
- rating-stars-filled
- loading-indicator

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.

## License

Shopgate Connect - Extension Boilerplate is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.
