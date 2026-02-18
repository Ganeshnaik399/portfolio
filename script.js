const sidemenu = document.querySelector('#sidemenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");
function openMenu(){
    sidemenu.style.transform ='translateX(-16rem)';
}
function closeMenu(){
    sidemenu.style.transform ='translateX(16rem)';
}
window.addEventListener('scroll',()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white','bg-opacity-50',
            'backdrop-blur-lg','shadow-sm','dark:bg-[#11001f]','dark:shadow-white/20');
            navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50','dark:border','dark:border-white/50','dark:bg-transparent');
        }
    else{
        navBar.classList.remove('bg-gray','bg-opacity-50',
            'backdrop-blur-lg','shadow-sm');
            navLinks.classList.add('bg-white','shadow-sm','bg-opacity-50','dark:border','dark:border-white/50','dark:bg-transparent');
    }
})
//......light to dark........
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if( localStorage.getItem("theme") === 'dark' || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches))
{
    document.documentElement.classList.add("dark");
}
else{
    document.documentElement.classList.remove("dark");
}
function toggleTheme() {
    console.log("toggel button clicked");
    const root=document.documentElement;
    root.classList.toggle("dark");

    if (root.classList.contains('dark')) {
        localStorage.setItem("theme","dark");
    } else {
        localStorage.setItem("theme","light");
        }
}


