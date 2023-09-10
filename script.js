function batch() {
    const french_name = window.prompt("Provide the book app name:")
    const french_dir = window.prompt("Provide the directory for the book app:") 
    const setres_dir = window.prompt("Provide the directory for setres.exe:")
    const default_width = window.prompt("Provide the default width:")
    const default_height = window.prompt("Provide the default height:")
    const preferred_width = window.prompt("Provide the preferred width:")
    const preferred_height = window.prompt("Provide the preferred height:")
    const base_str = new String("@echo off\necho Setting the resolution to WIDTHxHEIGHT...\ntimeout /t 2 /nobreak >nul 2>&1\nstart \"\" /wait DIR SET -w WIDTH -h HEIGHT -noprompt\necho Resolution set to WIDTHxHEIGHT.\ntimeout /t 3 /nobreak >nul 2>&1\necho Starting APP ...\ntimeout /t 2 /nobreak >nul 2>&1\nstart \"\" /wait DIR2\necho APP closed.\ntimeout /t 2 /nobreak >nul 2>&1\necho Setting the resolution back to WIDTH2xHEIGHT2...\ntimeout /t 2 /nobreak >nul 2>&1\nstart \"\" /wait DIR SET -w WIDTH2 -h HEIGHT2 -noprompt\necho Resolution set to WIDTH2xHEIGHT2.\npause")
    const french_name_str = base_str.replace(/APP/g, french_name)
    const french_dir_str = french_name_str.replace("DIR2", french_dir)
    const setres_dir_str = french_dir_str.replace(/DIR/g, setres_dir)
    const default_width_str = setres_dir_str.replace(/WIDTH2/g, default_width)
    const default_height_str = default_width_str.replace(/HEIGHT2/g, default_height)
    const preferred_width_str = default_height_str.replace(/WIDTH/g, preferred_width)
    const preferred_height_str = preferred_width_str.replace(/HEIGHT/g, preferred_height)
    document.getElementById("code").innerText = preferred_height_str
}
