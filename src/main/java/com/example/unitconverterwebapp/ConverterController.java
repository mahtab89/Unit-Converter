package com.example.unitconverterwebapp;

import java.util.HashMap;
import org.springframework.web.bind.annotation.*;

@RestController
public class ConverterController {
    @GetMapping("/convert")
    public Result convert(
            @RequestParam String type,
            @RequestParam double value,
            @RequestParam String from,
            @RequestParam String to
    ) {
        double result = convertUnits(type, value, from, to);
        return new Result(result);
    }

    private double convertUnits(String type, double value, String from, String to) {
        double result = 0;
        switch (type) {
            case "length" -> {
                HashMap<String, Double> lengths = new HashMap<>();
                lengths.put("mm", 0.001);
                lengths.put("cm", 0.01);
                lengths.put("m", 1.0);
                lengths.put("km", 1000.0);
                lengths.put("inch", 0.0254);
                lengths.put("ft", 0.3048);
                lengths.put("yd", 0.9144);
                lengths.put("mile", 1609.34);

                result = (lengths.get(from) * value) / lengths.get(to);
            }
            case "weight" -> {
                HashMap<String, Double> weights = new HashMap<>();
                weights.put("mg", 0.001);
                weights.put("g", 1.0);
                weights.put("kg", 1000.0);
                weights.put("ounce", 28.3495);
                weights.put("pd", 453.592);
                weights.put("ton", 1000000.0);

                result = (weights.get(from) * value) / weights.get(to);
            }
            case "temperature" -> {
                if (from.equals(to)) result = value;
                else if (from.equals("c") && to.equals("f")) result = (value * 9) / 5 + 32;
                else if (from.equals("f") && to.equals("c")) result = ((value - 32) * 5) / 9;
                else if (from.equals("c") && to.equals("k")) result = value + 273.15;
                else if (from.equals("k") && to.equals("c")) result = value - 273.15;
                else if (from.equals("f") && to.equals("k")) result = ((value - 32) * 5) / 9 + 273.15;
                else if (from.equals("k") && to.equals("f")) result = ((value - 273.15) * 9) / 5 + 32;
            }
        }
        return result;
    }

    record Result(double result) { }
}
