Text(){
	Text(Time(0, 0, Timer1.Value/1000), "hh:mm:ss")
} // End of Text

Start(){
	
	true
} // End of Start

Repeat(){
	false
} // End of Repeat

Duration(){
	Value(txtTimerMinutes.Text)*60000
	
} // End of Duration

AutoStart(){
	true
} // End of AutoStart

AutoPause(){
	true
} // End of AutoPause

BorderColor(){
	ColorFade(Timer1.Fill, -15%)
} // End of BorderColor

DisabledBorderColor(){
	ColorFade(Timer1.BorderColor, 70%)
} // End of DisabledBorderColor

PressedBorderColor(){
	Timer1.Fill
} // End of PressedBorderColor

HoverBorderColor(){
	ColorFade(Timer1.BorderColor, 20%)
} // End of HoverBorderColor

BorderStyle(){
	BorderStyle.Solid
} // End of BorderStyle

FocusedBorderColor(){
	Timer1.BorderColor
} // End of FocusedBorderColor

Color(){
	RGBA(255, 255, 255, 1)
} // End of Color

DisabledColor(){
	ColorFade(Timer1.Fill, 90%)
} // End of DisabledColor

PressedColor(){
	Timer1.Fill
} // End of PressedColor

HoverColor(){
	RGBA(255, 255, 255, 1)
} // End of HoverColor

DisplayMode(){
	DisplayMode.Edit
} // End of DisplayMode

Fill(){
	RGBA(56, 96, 178, 1)
} // End of Fill

DisabledFill(){
	ColorFade(Timer1.Fill, 70%)
} // End of DisabledFill

PressedFill(){
	Timer1.Color
} // End of PressedFill

HoverFill(){
	ColorFade(RGBA(56, 96, 178, 1), -20%)
} // End of HoverFill

Font(){
	Font.'Open Sans'
} // End of Font

FontWeight(){
	FontWeight.Normal
} // End of FontWeight

Align(){
	Align.Center
} // End of Align

VerticalAlign(){
	VerticalAlign.Middle
} // End of VerticalAlign

X(){
	1167
} // End of X

Y(){
	699
} // End of Y

Width(){
	172
} // End of Width

Height(){
	40
} // End of Height

ZIndex(){
	AutoValue
} // End of ZIndex

BorderThickness(){
	2
} // End of BorderThickness

FocusedBorderThickness(){
	4
} // End of FocusedBorderThickness

Size(){
	13
} // End of Size

Visible(){
	false
} // End of Visible

