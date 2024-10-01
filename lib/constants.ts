export const NAV_THEME = {
  light: {
    background: "hsl(0 0% 100%)", // background
    border: "hsl(220 13% 91%)", // border
    card: "hsl(0 0% 100%)", // card
    notification: "hsl(0 84.2% 60.2%)", // destructive
    primary: "hsl(262.1 83.3% 57.8%)", // primary
    text: "hsl(224 71.4% 4.1%)", // foreground
  },
  dark: {
    background: "hsl(224 71.4% 4.1%)", // background
    border: "hsl(215 27.9% 16.9%)", // border
    card: "hsl(224 71.4% 4.1%)", // card
    notification: "hsl(0 62.8% 30.6%)", // destructive
    primary: "hsl(263.4 70% 50.4%)", // primary
    text: "hsl(210 20% 98%)", // foreground
  },
};

export const LIGHT_THEME = {
  dark: false,
  colors: NAV_THEME.light,
};

export const DARK_THEME = {
  dark: true,
  colors: NAV_THEME.dark,
};