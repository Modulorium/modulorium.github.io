import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-about',
    imports: [CommonModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {

    paragraphs = [
        {
            image: null,
            text: "Hi, I'm Modulo (or Modulorium). I'm a software developer and long-time gamer who's been active online since around 2016. My first notable time online was on Roblox, where one of my favorite worlds was a sandbox building plot world. Eventually, I started playing Minecraft in around 2013. Early on in Minecraft, I spent most of my time building in creative mode, experimenting with redstone, and exploring what commands could do.",
        },
        {
            image: null,
            text: "It was the command system in Minecraft that really pulled me toward software development. When one-command creations started to become popular on Youtube, I got inspired to try more complex ideas. I ended up posting a few of my own creations on Planet Minecraft when datapacks got released and I got some encouraging feedback. ",
        },
        {
            image: "page/general/about/ps6.png",
            text: "Soon after, I rediscovered Gamemode 4, a group focused on Minecraft datapacks. I joined their public server and played for a few months before eventually trying to contribute to their datapack collection. That experience also introduced me to something new: negative feedback. It was the first time I'd had my work critiqued seriously, and it hit hard but it pushed me to improve."
        },
        {
            image: "page/general/about/gm4_team.png",
            text: "Even though I was kind of a pain on the public server at times, the team gave me a chance and when applications opened, I was accepted. My first collaborative project taught me a lot, and over time I matured a great deal, both in my technical skills and how I worked with others. One of the biggest takeaways from that time was the importance of professionalism. The GM4 team set a high standard, and being part of that helped shape how I carry myself.",
        },
        {
            image: "page/general/about/smithed_team.png",
            text: "As the datapack community grew, the Smithed project was launched to help standardize conventions and support creators. I joined fairly late in the planning of the first Smithed Summit, a convention centered around the datapack community, but I was eager to help however I could. I'm really excited to see where future summits go, and I feel very lucky to have been even a small part of it.",
        },
        {
            image: "page/general/about/hollow_knight.png",
            text: "Gaming has always been a big part of my life. Terraria was the first Steam game I bought, and it's still one of my all-time favorites. Although my interests have changed over years, I still hold a strong love for survival sandbox games and automation focused games like Factorio. After playing hundreds of games, Hollow Knight ended up becoming one of my favorite games of all time and I am every excited for Silksong to realease.",
        },
        {
            image: null,
            text: "These days, I've been taking a bit of a break from Minecraft, but I do hope to return to working on datapacks and other projects in the near future. I'm currently spending my time on various side projects (like this website) and exploring new interests. Lately, I've gotten into VRChat, where I've been learning improv and meeting new and interesting people.",
        },
        {
            image: "page/general/about/horizon.png",
            text: "I'm genuinely excited for what the future holds. Where I stand today as a person wouldn't have been possible without the communities I've had the honor of being a part of and all the amazing people I've had the pleasure of growing alongside. I'm grateful for where I've been and looking forward to what's next.",
            flip: true
        }
    ]

}
