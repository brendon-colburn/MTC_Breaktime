Width(){
	39
} // End of Width

Y(){
	16
} // End of Y

X(){
	1300
} // End of X

FocusedBorderThickness(){
	2
} // End of FocusedBorderThickness

DisplayMode(){
	DisplayMode.Edit
} // End of DisplayMode

BorderThickness(){
	0
} // End of BorderThickness

ZIndex(){
	AutoValue
} // End of ZIndex

DisabledBorderColor(){
	RGBA(166, 166, 166, 1)
} // End of DisabledBorderColor

Fill(){
	RGBA(0, 0, 0, 0)
} // End of Fill

DisabledColor(){
	RGBA(244, 244, 244, 1)
} // End of DisabledColor

Color(){
	RGBA(255, 255, 255, 1)
} // End of Color

Icon(){
	Icon.Settings
} // End of Icon

FocusedBorderColor(){
	ConfigButton.BorderColor
} // End of FocusedBorderColor

HoverBorderColor(){
	ColorFade(ConfigButton.BorderColor, 20%)
} // End of HoverBorderColor

PressedBorderColor(){
	ColorFade(ConfigButton.BorderColor, -20%)
} // End of PressedBorderColor

HoverFill(){
	ConfigButton.Fill
} // End of HoverFill

BorderColor(){
	RGBA(0, 18, 107, 1)
} // End of BorderColor

BorderStyle(){
	BorderStyle.Solid
} // End of BorderStyle

Height(){
	32
} // End of Height

PressedFill(){
	ConfigButton.Fill
} // End of PressedFill

DisabledFill(){
	ConfigButton.Fill
} // End of DisabledFill

HoverColor(){
	ColorFade(ConfigButton.Color, 20%)
} // End of HoverColor

PressedColor(){
	ColorFade(ConfigButton.Color, -20%)
} // End of PressedColor

OnSelect(){
	Navigate([@ConfigScreen])
	
} // End of OnSelect

