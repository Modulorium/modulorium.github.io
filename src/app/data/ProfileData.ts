import { Panel } from "../component/panels/panels.component"

export class ProfileData {

    private static panels: Panel[] = [
		{
			"name": "General",
			"description": "Go back to the home page and discover more...",
			"images": [
				{
					"link": "image/panel/general/icons.png",
					"title": "Placeholder Image"
				}
			],
			"link": "/"
		},
		{
			"name": "Minecraft",
			"description": "Learn more about my history with command blocks and datapacks...",
			"images": [
				{
					"link": "image/panel/mc_2.png",
					"title": "Gamemode 4 Display"
				},
				{
					"link": "image/panel/mc_1.png",
					"title": "The Hatter NPC"
				},
				{
					"link": "image/panel/mc_3.png",
					"title": "Smithed Summit"
				}
			],
			"link": "/minecraft"
		},
		{
			"name": "Development",
			"description": "Learn more about my other development projects...",
			"images": [
				{
					"link": "image/panel/dev_3.png",
					"title": "World Gen Demo"
				},
				{
					"link": "image/panel/dev_1.jpg",
					"title": "Game Engine Icons",
					"flip": true,
				},
				{
					"link": "image/panel/dev_2.png",
					"title": "Petal Perspective Screenshot"
				}
			],
			"link": "/development"
		},
		{
			"name": "Archive",
			"description": "A collection of useful information, reviews, etc...",
			"images": [
				{
					"link": "image/panel/arc_2.jpg",
					"title": "Steam Banner"
				},
				{
					"link": "image/panel/arc_3.png",
					"title": "VSCode Screenshot"
				},
				{
					"link": "image/panel/arc_1.png",
					"title": "Movie Collage"
				}
			],
			"link": "/archive"
		}
	]

    public static get(path: string) {
        switch (path) {
			case "/":
				return {
                    title: "General",
                    image: "image/profile/def.png",
					description: "Here you'll find a broad overview of who I am and what I'm currently working on. This section includes links to other platforms, a bit more about my background, a look at what I'm focused on right now, and a few endorsements or shoutouts to people and groups I've worked with or recommend checking out.",
                    panels: [
                        ...ProfileData.panels
                    ]
                }
			case "/minecraft":
				return {
                    title: "Minecraft",
                    image: "image/profile/mc.png",
					description: "Still working on this section...",
                    panels: [
                        ...ProfileData.panels
                    ]
                }
			case "/development":
				return {
                    title: "Development",
                    image: "image/profile/def.png",
					description: "Still working on this section...",
                    panels: [
                        ...ProfileData.panels
                    ]
                }
			case "/archive":
				return {
                    title: "Archive",
                    image: "image/profile/def.png",
					description: "Still working on this section...",
                    panels: [
                        ...ProfileData.panels
                    ]
                }
            default:
                return {
                    title: "",
                    image: "",
                    panels: []
                }
		}
    }

}