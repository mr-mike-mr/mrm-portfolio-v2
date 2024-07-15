// *TYPE WRITE EFFECT FUNCTION* //
// init i var
let i = 0;
// async function for slow write
async function type_write_effect_slow() {
    // vars from texts for type
    const name = '$MR.MIKE';
    const skills_title = 'SKILLS'
    const projects_title = 'PROJECTS'
    const about_role = 'Full-Stack Developer';

    // if name lenght is more then i
    if (i < name.length) {
        // set element content by id
        document.getElementById("name").innerHTML += name.charAt(i);
        // set document title
        document.title += name.charAt(i);
    }

    // if skills_title lenght is more then i
    if (i < skills_title.length) {
        // set element content by id
        document.getElementById("skills_title").innerHTML += skills_title.charAt(i);
    }

    // if projects_title lenght is more then i
    if (i < projects_title.length) {
        // set element content by id
        document.getElementById("projects_title").innerHTML += projects_title.charAt(i);
    }

    // if about_role lenght is more then i
    if (i < about_role.length) {
        // set element content by id
        document.getElementById("about_role").innerHTML += about_role.charAt(i);
    }

    // increases i by 1
    i++;
    // call function every 100ms
    setTimeout(type_write_effect_slow, 100);
}
// init _i var
let _i = 0;
// async function for speed write
async function type_write_effect_fast() {
    // vars from texts for type
    const goal = 'My goal is to make applications that will have real use.';
    const about_text = ' new from technology and the like. I try to write clean and elegant code that everyone can understand.';

    // if goal lenght is more then i
    if (_i < goal.length) {
        // set element content by id
        document.getElementById("goal").innerHTML += goal.charAt(_i);
    }

    // if about_text lenght is more then i
    if (_i < about_text.length) {
        // set element content by id
        document.getElementById("about_text").innerHTML += about_text.charAt(_i);
    }

    // increases _i by 1
    _i++;
    // call function every 50ms
    setTimeout(type_write_effect_fast, 50);
}
// init type write effect functions call
type_write_effect_slow();
type_write_effect_fast();

// *SLIDESHOW FUNCTION* //
// init n var
let n = 0;
// async function
async function slideshow() {
    // project content list
    const projects_list = [
        // MRM PORTFOLIO V2
        {
            'title': 'MRM Portfolio v2',
            'details': 'Dynamic and rwd porfolio.',
            'used': ['HTML', 'CSS', 'JAVASCRIPT'],
            'link': 'https://github.com/mr-mike-mr/mrm-portfolio-v2'
        },
        // MRM PORTFOLIO V1
        {
            'title': 'MRM Portfolio v1',
            'details': 'First static and rwd porfolio.',
            'used': ['HTML', 'CSS'],
            'link': 'https://github.com/mr-mike-mr/mrm-portfolio-v1'
        },
        // MRM LINKTREE
        {
            'title': 'MRM Linktree',
            'details': 'Static website from links.',
            'used': ['HTML', 'CSS', 'TAILWINDCSS'],
            'link': 'https://github.com/mr-mike-mr/mrm-linktree'
        },
        // MRM REMINDER OF IMPORTANT DATED
        {
            'title': 'MRM Reminder of Important Dates',
            'details': 'Server application that notifies you of important dates. The application also has a built-in database client, configurator and config manager.',
            'used': ['PYTHON', 'SQLITE3', 'JSON'],
            'link': 'https://github.com/mr-mike-mr/mrm-reminder-of-important-dates'
        },
        // LOGIN AND REGISTER SYSTEM
        {
            'title': 'Login Register System',
            'details': 'Very simple and unencrypted login/register system.',
            'used': ['PYTHON', 'SQLITE3'],
            'link': 'https://github.com/mr-mike-mr/login-register-system'
        },
        // SIMPLE CHAT APP
        {
            'title': 'Simple Chat App',
            'details': 'Very simple and unencrypted chat application.',
            'used': ['PYTHON', 'SQLITE3'],
            'link': 'https://github.com/mr-mike-mr/simple-chat-app'
        }
    ]

    // set elements by id
    document.getElementById("slide_title").innerHTML = projects_list[n].title;
    document.getElementById("slide_details").innerHTML = projects_list[n].details;
    document.getElementById("slide_link").href = projects_list[n].link;

    // init user string var
    let used_string = '';
    // goes through the project_list and puts it into a div
    for (const _used of projects_list[n].used) {
        used_string += '\n<div>'+_used+'</div>';
    }
    // show used string
    document.getElementById("slide_used").innerHTML = used_string;

    // if n is same projects_list length
    if (n == projects_list.length-1) {
        // reset n
        n = 0;
    } else {
        // increases n by 1
        n++;
    }

    // call slideshow function every 15seconds
    setTimeout(slideshow, 15000);
}
// init slide show functions call
slideshow();