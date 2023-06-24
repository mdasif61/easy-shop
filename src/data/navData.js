export const commonNav = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/products",
    title: "Products",
  },
];

export const afterLoginNavData = [
    ...commonNav,
    {
        path:'/dashboard',
        title:'Dashboard'
    }
];
export const beforeLoginNavData=[
    ...commonNav,
    {
        path:'/signup',
        title:'Signup'
    },
    {
        path:'/login',
        title:'Login'
    }
]
