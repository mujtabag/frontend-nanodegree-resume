var bio = {
    "name": "\nMujtaba \n",
    "role": "hiking ninja (sensei)\n",
    "mobile": " 408 xxx yyyy",
    "email": " mujtabag64@gmail.com",
    "github": "https://github.com/mujtabag",
    "image": "images/hike_photo.jpg",
    "pictureURL": " https://goo.gl/photos/mRhgyZA2w4jUPje8A ",
    "welcomeMessage": "Welcome to my world!",
    "contacts": {
        "location": "San Jose, CA"
    },
    "skills": ["navigation ", "back country cooking ", "first aid ", " campfires"]
};


var work = {
    "jobs": [{
        "position": "Hiking Sensei",
        "employer": "Grand Order of the Hiking Ninjas of America",
        "years": "2013-2015",
        "description": "Took a bunch of people on really cool hikes. Also made awesome food in the wilderness, and caught some trout. I recommend the Whitney Portal Store for monumental pancakes, as a recovery meal after the hike",
        "location": "Lone Pine, CA",
        "map": "https://www.google.com/maps/d/embed?mid=z42Tzeiu1Nto.kNF0VKegGDeU",
        "image": ""
    }, {
        "position": "Hiking Ninja",
        "employer": "Grand Order of the Hiking Ninjas of America",
        "years": "2001-2013",
        "description": "Crossed the Sierra Nevada. Also called in a helicopter rescue, but everyone was fine in the end. Mammoth is an especially fine place for post-hike recovery meals. I personally recommend the <a href=\"http://www.basecampcafe.com/Base_Camp_Cafe/Base_Camp_Cafe.html\"> Base Camp Cafe </a>",
        "location": "Mammoth, CA",
        "map": "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d8279.284160992032!2d-118.97329976720577!3d37.64724271103217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srestaurants+!5e0!3m2!1sen!2sus!4v1442463815887",
        "image": ""
    }, {
        "position": "freelance hiking consultant",
        "employer": "Consolidated Association of Free Spirits",
        "years": "1993-1999",
        "description": "guided Bay Area hikes and a few in the Sierra Nevada and Cascades",
        "location": "El Portal, CA",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64486.52433513376!2d-119.4855860650527!3d37.75228943073517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8096f24606890311%3A0x7cccce25d9b24851!2sSierra+Nevada%2C+California!5e1!3m2!1sen!2sus!4v1442464557657",
        "image": ""
    }]
};
var project = {
    "projects": [{
        "title": "Clouds Rest",
        "description": "Hiked to the top of Clouds Rest for a spectacular view of the Sierra crest",
        "dates": "2015",
        "image": "images/from_clouds_rest.jpg",
        "waypoints": ""
    }, {
        "title": "Mount Hoffman",
        "description": "Climbed Mount Hoffman, in the geographic center of Yosemite",
        "dates": "2014",
        "image": "images/from_mount_hoffman.jpg",
        "waypoints": ["May Lake, Yosemite National Park", "Mount Hoffman, Yosemite National Park", "37.846260, -119.509793", "37.840435, -119.502309", "37.841812, -119.509337"]
    }, {
        "title": "Roads End to Whitney Portal",
        "description": "Crossed the Sierra Nevada from West to East",
        "dates": "2012",
        "image": "images/whitney_window.jpg",
        "waypoints": ""
    }, {
        "title": "Ansel Adams Wilderness",
        "description": "Hung out and fished at Garnet Lake. Climbed some small unnamed mountains",
        "dates": "2011",
        "image": "images/Sunrise.jpg",
        "waypoints": ""
    }]
};


var education = {
    "schools": [{
        "name": "Udacity",
        "location": "San Jose, CA",
        "major": "Front End Web Design",
        "minor": "",
        "onlineCourses": ["Intro to HTML and CSS", "Intro to Javascript"]
    }, {
        "name": "The Johns Hopkins University",
        "location": "Baltimore, MD",
        "major": "Engineering",
        "minor": "",
        "onlineCourses": []
    }, {
        "name": "Imperial College of Science and Technology",
        "location": "London, UK",
        "major": "Physics",
        "minor": "",
        "onlineCourses": []
    }]
};


function locationizer(work_obj) {
    var work_array = [];
    for (var job in work_obj.jobs) {
        if (work_obj.hasOwnProperty('jobs')) {
            work_array.push(work_obj.jobs[job].location);
        }
    }
    return work_array;

}

// Print the bio
bio.display = function() {
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.image);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedWelcome = HTMLheaderName.replace("%data%", bio.welcomeMessage);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedEmail = HTMLemail.replace("%data%", bio.email);
    var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
    var formattedGithub = HTMLgithub.replace("%data%", bio.github);
    console.log(formattedName);
    $("#header").append(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedRole);
    $("#header").append(formattedWelcome);
    //$("#header").append(bio.contactInfo);
    $("#header").append(formattedEmail);
    $("#header").append(formattedMobile);
    $("#header").append(formattedGithub);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill_index in bio.skills) {
            if (bio.hasOwnProperty('skills')) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill_index]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

project.display = function() {
    // method to display project data
    console.log(project.projects.length);
    if (project.projects.length > 0) {
        for (var index in project.projects) {
            if (project.hasOwnProperty('projects')) {
                $("#header").append(HTMLprojectStart);
                var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[index].title);
                $("#projects").append(formattedTitle);
                var formattedDates = HTMLprojectDates.replace("%data%", project.projects[index].dates);
                $("#projects").append(formattedDates);
                var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[index].description);
                $("#projects").append(formattedDescription);
                var formattedImage = HTMLprojectImage.replace("%data%", project.projects[index].image);
                $("#projects").append(formattedImage);
            }
        }
    }
};

work.display = function() {
    // function to display work experience

    if (work.jobs.length > 0) {
        $("#header").append(HTMLworkStart);
        for (var jobs_index in work.jobs) {
            if (work.hasOwnProperty('jobs')) {
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobs_index].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobs_index].position);
                var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jobs_index].years);
                var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[jobs_index].Location);
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobs_index].description);
                var formattedMap = HTMLworkMap.replace("%data%", work.jobs[jobs_index].map);
                console.log(formattedEmployer);
                console.log(formattedTitle);
                $("#workExperience").append(formattedEmployer);
                //$("#workExperience").append(formattedLocation);
                $("#workExperience").append(formattedTitle);
                $("#workExperience").append(formattedDates);
                $("#workExperience").append(formattedDescription);
                $("#workExperience").append(formattedMap);
                var formattedImage = HTMLprojectImage.replace("%data%", work.jobs[jobs_index].image);
                $("#workExperience").append(formattedImage);
            }
        }
    }
};

function inName(name) {
    // internationalize the input name
    var names = name.split(' ');
    // first name: only the initial letter should be capitalized
    names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    // second name should be entirely capitalized
    names[1] = names[1].toUpperCase();
    return names[0] + ' ' + names[1];
}

// Add an "internationalize name" button

$("#main").append(internationalizeButton);

console.log(inName("camErOn pitTMAn"));

// print my bio
bio.display();

// Print the work descriptions
work.display();

// print the project info
project.display();

// add the map
$("#mapDiv").append(googleMap);
